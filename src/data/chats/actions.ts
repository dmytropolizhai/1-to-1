import { prisma } from "@/shared/lib/prisma";
import { getMe } from "../users/actions";

export async function getChats() {
    const me = await getMe();
    if (!me) return [];

    const chats = await prisma.chat.findMany({
        where: {
            participants: {
                some: {
                    userId: me.id
                }
            }
        },
        include: {
            participants: {
                include: {
                    user: true
                }
            },
            messages: {
                orderBy: {
                    createdAt: 'desc'
                },
                take: 1
            }
        }
    });

    return chats.map(chat => {
        const otherParticipant = chat.participants.find(p => p.userId !== me.id)?.user;
        const lastMessage = chat.messages[0];

        return {
            id: chat.publicId,
            name: otherParticipant?.name || "Unknown User",
            lastMessage: lastMessage?.content || "No messages yet",
            initial: otherParticipant?.name?.charAt(0).toUpperCase() || "?"
        };
    });
}