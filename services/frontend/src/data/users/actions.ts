"use server"

import { createUserSchema, CreateUserData } from "@/data/users/schema";
import { prisma } from "@/shared/lib/prisma";
import { cookies } from "next/headers";
import { ActionState } from "@/data/types";
import { generateOTP, hashOtp } from "@/shared/lib/otp";
import { sendOTPEmail } from "@/shared/lib/email";
import { redis } from "@/shared/lib/redis";

export type CreateUserState = ActionState<CreateUserData>;

export async function createUserAction(
    _prev: CreateUserState,
    formData: FormData
): Promise<CreateUserState> {
    const raw = Object.fromEntries(formData.entries());
    const parsed = createUserSchema.safeParse(raw);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    try {
        // Validate if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                "email": parsed.data.email,
            }
        });
        if (existingUser) {
            return { success: false, message: "User already exists." };
        }

        // Create user
        const user = await prisma.user.create({
            data: {
                name: parsed.data.name,
                email: parsed.data.email,
            }
        });

        if (user) {
            const cookieStore = await cookies();
            cookieStore.set("user_id", user.id.toString(), {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
            });
            return { success: true, message: "User created successfully." };
        }
    } catch (error) {
        return { success: false, message: "Something went wrong." };
    }

    return { success: false, message: "Failed to create user." };
}

export async function getMe() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;
    if (!userId) return null;

    const cacheKey = `user:${userId}`;
    try {
        const cached = await redis.get(cacheKey);
        if (cached) return JSON.parse(cached);

        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
        });

        if (user) {
            await redis.set(cacheKey, JSON.stringify(user), { EX: 3600 });
        }
        return user;
    } catch (error) {
        return null;
    }
}

export async function requestOtpAction(
    _prev: ActionState<{ email: string }>,
    formData: FormData
): Promise<ActionState<{ email: string }>> {
    const email = formData.get("email") as string;

    if (!email) {
        return { success: false, message: "Email is required." };
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return { success: false, message: "User not found." };
        }
    } catch (error) {
        return { success: false, message: "Failed to find user." };
    }

    const code = generateOTP();
    const codeHash = hashOtp(email, code);
    
    // Store in Redis with 10-minute expiration
    await redis.set(`otp:${email}`, codeHash, {
        EX: 10 * 60,
    });

    try {
        await sendOTPEmail(email, code);
    } catch (error) {
        console.error("Failed to send OTP:", error);
        return { success: false, message: "Failed to send OTP. Please try again." };
    }

    return { success: true, message: "OTP sent to your email." };
}

export async function verifyOtpAction(
    _prev: ActionState<{ email: string; otp: string }>,
    formData: FormData
): Promise<ActionState<{ email: string; otp: string }>> {
    const email = formData.get("email") as string;
    const otp = formData.get("otp") as string;

    if (!email || !otp) {
        return { success: false, message: "Email and OTP are required." };
    }

    const storedHash = await redis.get(`otp:${email}`);

    if (!storedHash) {
        return { success: false, message: "No OTP was requested, or it has expired." };
    }

    const submittedHash = hashOtp(email, otp);
    if (submittedHash !== storedHash) {
        return { success: false, message: "Invalid OTP. Please try again." };
    }

    // OTP is valid — consume it and create the session
    await redis.del(`otp:${email}`);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return { success: false, message: "User not found." };
    }

    const cookieStore = await cookies();
    cookieStore.set("user_id", user.id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });

    return { success: true, message: "Logged in successfully." };
}

export async function logoutAction() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;
    if (userId) {
        await redis.del(`user:${userId}`);
    }
    cookieStore.delete("user_id");
}

