"use client";

import { useSnapshot } from "valtio";
import { proxyChat } from "./--proxy";
import { ChatListCard } from "./page--chat-list--card";

export function ChatList() {
  const { list } = useSnapshot(proxyChat);

  return (
    <div className="space-y-4">
      {list.map((chat, index) => (
        <ChatListCard
          arg={{ from: chat.from, message: chat.message }}
          key={`${chat.from}-${chat.message}-${index}`}
        />
      ))}
    </div>
  );
}
