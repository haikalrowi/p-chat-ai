import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatInput } from "./page--chat-input";
import { ChatList } from "./page--chat-list";
import { ChatLoad } from "./page--chat-load";
import { ChatMore } from "./page--chat-more";

export default function Page() {
  return (
    <div className="container mx-auto flex h-dvh flex-col">
      <ChatLoad />

      <div className="flex-1 overflow-auto">
        <ScrollArea className="h-full w-full p-8">
          <ChatList />
        </ScrollArea>
      </div>
      <div className="flex space-x-2 p-8">
        <ChatMore />
        <ChatInput />
      </div>
    </div>
  );
}
