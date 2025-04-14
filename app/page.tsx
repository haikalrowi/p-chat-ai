import { ChatInput } from "./page--chat-input";
import { ChatList } from "./page--chat-list";
import { ChatMore } from "./page--chat-more";

export default function Page() {
  return (
    <div className="container mx-auto flex h-dvh flex-col">
      <div className="flex-1 p-8">
        <ChatList />
      </div>
      <div className="flex space-x-2 p-8">
        <ChatMore />
        <ChatInput />
      </div>
    </div>
  );
}
