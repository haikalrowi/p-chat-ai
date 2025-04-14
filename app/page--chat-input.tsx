"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useActionState, useRef } from "react";
import { actionChatSend } from "./--action";
import { proxyChat } from "./--proxy";

export function ChatInput() {
  const inputRef = useRef(null);
  const { "1": chatActionDispatch, "2": chatActionIsPending } = useActionState(
    async () => {
      await actionChatSend();
      proxyChat.list = [
        ...proxyChat.list,
        { id: `${Math.random()}`, from: "user", message: "1" },
        { id: `${Math.random()}`, from: "ai", message: "2" },
      ];
    },
    null,
  );

  return (
    <form action={chatActionDispatch} className="flex flex-1">
      <Input />
      <Button className="ml-2" disabled={chatActionIsPending}>
        <Send /> Send
      </Button>
    </form>
  );
}
