import type { Message } from "@/generated/prisma/client";

export interface ClientToServerEvents {
    joinChat: (chatId: string) => void;
    leaveChat: (chatId: string) => void;
    relayMessage: (payload: { chatId: string; message: Message }) => void;
}


export interface ServerToClientEvents {
    message: (payload: { chatId: string; message: Message }) => void;
    userCount: (count: number) => void;
}