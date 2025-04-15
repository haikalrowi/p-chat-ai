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
    <div className="space-y-8">
      {list.map((chat, index) => (
        <ChatListCard
          arg={{ from: chat.from, message: chat.message }}
          key={`${chat.from}-${chat.message}-${index}`}
        />
      ))}
      {textInput && <ChatListCard arg={{ from: "user", message: textInput }} />}
      {textStream && <ChatListCard arg={{ from: "ai", message: textStream }} />}
      <div ref={viewRef} />
    </div>
  );
}
