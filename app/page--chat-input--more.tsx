"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { proxyChat } from "./--proxy";

export function ChatInputMore() {
  const newChat = () => {
    proxyChat.list = [];
  };

  return (
    <div className="flex flex-col gap-4 *:flex *:flex-wrap *:gap-4">
      <div>
        <ModeToggle />
      </div>
      <div>
        <Button onClick={newChat}>
          <Plus /> New chat
        </Button>
      </div>
    </div>
  );
}
