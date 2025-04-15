import { ChatInput } from "./page--chat-input";
import { ChatList } from "./page--chat-list";
import { ChatLoad } from "./page--chat-load";

export default function Page() {
  return (
    <div className="m-4">
      <ChatLoad />

      <ChatList />

      <div className="absolute right-4 bottom-4 left-4">
        <div className="container mx-auto backdrop-blur-md backdrop-contrast-130">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
