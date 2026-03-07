"use client"

import { useEffect, useActionState } from "react";
import { useForm } from "react-hook-form";
import Form from "next/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/components/ui/input";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import { CreateUserData, createUserSchema } from "@/data/users/actions";
import { CreateUserState, createUserAction } from "@/data/users/schema";
import { Button } from "@/shared/components/ui/button";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";

const INITIAL_STATE: CreateUserState = { success: false };

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button className="w-full" type="submit" disabled={pending}>
            {pending ? "Creating..." : "Create"}
        </Button>
    )
}

export function CreateUserForm() {
    const [state, formAction] = useActionState(createUserAction, INITIAL_STATE);

    const {
        register,
        formState: { errors },
        setError,
        reset
    } = useForm<CreateUserData>({
        resolver: zodResolver(createUserSchema),
        defaultValues: { nickname: "" },
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.message ?? "User created successfully.");
            reset();
            return;
        }

        if (!state.errors) return;

        toast.error("Please fix the errors below.");

        for (const [field, messages] of Object.entries(state.errors)) {
            setError(field as keyof CreateUserData, {
                type: "server",
                message: messages?.[0],
            });
        }
    }, [state, setError]);


    return (
        <Form
            action={formAction}
            className="flex flex-col gap-8 justify-start items-center"
        >
            <Card>
                <CardContent>
                    <Field data-invalid={!!errors.nickname}>
                        <FieldLabel htmlFor="nickname">Nickname</FieldLabel>
                        <Input
                            {...register("nickname")}
                            id="nickname"
                            placeholder="Enter your nickname"
                            aria-invalid={!!errors.nickname}
                        />
                        <FieldDescription>
                            Enter your nickname. Must be unique
                        </FieldDescription>
                        {errors.nickname && (
                            <FieldError errors={[errors.nickname]} />
                        )}
                    </Field>
                </CardContent>

                <CardFooter>
                    <SubmitButton />
                </CardFooter>
            </Card>
        </Form>
    );
}
