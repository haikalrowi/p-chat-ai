"use client";

import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { proxyChat } from "./--proxy";
import { ChatListCard } from "./page--chat-list--card";

export function ChatList() {
  const { list, textInput, textStream } = useSnapshot(proxyChat);
  const viewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    viewRef.current?.scrollIntoView();
  }, [list, textInput, textStream]);

  return (
    <div className="container mx-auto space-y-4">
      {list.length === 0 && (
        <ChatListCard arg={{ from: "system", message: "Start chatting." }} />
      )}
      {list.map((chat, index) => (
        <ChatListCard
          arg={{ from: chat.from, message: chat.message }}
          key={`${chat.from}-${chat.message}-${index}`}
        />
      ))}
      {textInput && <ChatListCard arg={{ from: "user", message: textInput }} />}
      {textStream && <ChatListCard arg={{ from: "ai", message: textStream }} />}
      <div ref={viewRef} className="h-30" />
    </div>
  );
}
