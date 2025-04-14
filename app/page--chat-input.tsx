"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { readStreamableValue } from "ai/rsc";
import { Send } from "lucide-react";
import { useActionState, useRef } from "react";
import { actionChatSend } from "./--action";
import { proxyChat } from "./--proxy";

export function ChatInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { "1": chatActionDispatch, "2": chatActionIsPending } = useActionState(
    async () => {
      proxyChat.textInput = `${inputRef.current?.value}`;

      const textStream = await actionChatSend({
        arg: { input: proxyChat.textInput },
      });

      for await (const textPart of readStreamableValue(textStream)) {
        proxyChat.textStream = proxyChat.textStream + textPart;
      }

      proxyChat.list = [
        ...proxyChat.list,
        { id: `${Math.random()}`, from: "user", message: proxyChat.textInput },
        { id: `${Math.random()}`, from: "ai", message: proxyChat.textStream },
      ];

      proxyChat.textInput = "";
      proxyChat.textStream = "";
    },
    null,
  );

  return (
    <form action={chatActionDispatch} className="flex flex-1">
      <Input required disabled={chatActionIsPending} ref={inputRef} />
      <Button disabled={chatActionIsPending} className="ml-2">
        <Send /> Send
      </Button>
    </form>
  );
}
