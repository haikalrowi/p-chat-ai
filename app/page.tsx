import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatInput } from "./page--chat-input";
import { ChatList } from "./page--chat-list";
import { ChatLoad } from "./page--chat-load";

export default function Page() {
  return (
    <div className="container mx-auto flex h-dvh flex-col">
      <ChatLoad />

      <ScrollArea className="flex-1 overflow-auto p-8">
        <ChatList />
      </ScrollArea>
      <div className="p-8">
        <ChatInput />
      </div>
    </div>
  );
}
