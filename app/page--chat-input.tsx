"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { readStreamableValue } from "ai/rsc";
import { MoreHorizontal, Send } from "lucide-react";
import { useActionState, useRef } from "react";
import { actionChatSend } from "./--action";
import { proxyChat } from "./--proxy";
import { ChatInputMore } from "./page--chat-input--more";

export function ChatInput() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { "1": chatActionDispatch, "2": chatActionIsPending } = useActionState(
    async () => {
      if (inputRef.current) {
        proxyChat.textInput = inputRef.current.value;
        inputRef.current.value = "";
        inputRef.current.style.height = "auto";

        const textStream = await actionChatSend({
          arg: { input: proxyChat.textInput },
        });

        for await (const textPart of readStreamableValue(textStream)) {
          proxyChat.textStream = `${proxyChat.textStream}${textPart}`;
        }

        proxyChat.list = [
          ...proxyChat.list,
          {
            id: `${Math.random()}`,
            from: "user",
            message: proxyChat.textInput,
          },
          { id: `${Math.random()}`, from: "ai", message: proxyChat.textStream },
        ];
        proxyChat.textInput = "";
        proxyChat.textStream = "";
      }
    },
    null,
  );

  const resizeAutomatically: React.ComponentProps<"textarea">["onInput"] = (
    e,
  ) => {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight + 1}px`;
  };

  const enterToSend: React.ComponentProps<"textarea">["onKeyDown"] = (e) => {
    if ((e.key === "Enter" || e.key === "NumpadEnter") && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <form action={chatActionDispatch} className="relative">
      <Popover>
        <PopoverTrigger
          className={buttonVariants({
            variant: "outline",
            size: "icon",
            className: "absolute top-2 right-2",
          })}
        >
          <MoreHorizontal />
        </PopoverTrigger>
        <PopoverContent sideOffset={4 * 2}>
          <ChatInputMore />
        </PopoverContent>
      </Popover>
      <Textarea
        placeholder="Ask anything..."
        onInput={resizeAutomatically}
        onKeyDown={enterToSend}
        required
        readOnly={chatActionIsPending}
        ref={inputRef}
        autoFocus
        className="max-h-48 min-h-24 pr-12"
      />
      <Button
        size="icon"
        disabled={chatActionIsPending}
        className="absolute right-2 bottom-2"
      >
        <Send />
      </Button>
    </form>
  );
}
