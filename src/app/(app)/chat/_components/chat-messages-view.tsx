import { getMe } from "@/data/users/actions";
import { ChatMessageList } from "./chat-message-list";
import { getCurrentChat } from "@/data/chats/actions";

export async function ChatMessagesView() {
    const chat = await getCurrentChat();
    const me = await getMe();

    if (!chat) {
        return (
            <div className="flex flex-1 items-center justify-center text-muted-foreground">
                No active chat found.
            </div>
        )
    }

    if (!me) return null;

    const messages = await chat.getMessages();

    return (
        <ChatMessageList messages={messages} meId={me.id} />
    )
}
