import { getCurrentChat } from "@/data/chats/actions";
import { ChatInput } from "./_components/chat-input";
import { ChatMessagesView } from "./_components/chat-messages-view";

export default async function ChatPage() {
  const chat = await getCurrentChat();

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
      <div className="flex-1 overflow-hidden relative flex flex-col">
        <ChatMessagesView />
        {chat && <ChatInput />}
      </div>
    </div>
  );
}