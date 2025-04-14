"use client";

import { useEffect } from "react";
import { subscribe } from "valtio";
import { z } from "zod";
import { proxyChat } from "./--proxy";

export function ChatLoad() {
  useEffect(() => {
    const unsubscribe = subscribe(proxyChat, () => {
      localStorage.setItem("proxy--chat", JSON.stringify(proxyChat));
    });

    const { data } = z
      .object({
        list: z.array(
          z.object({
            id: z.string(),
            from: z.enum(["user", "ai"]),
            message: z.string(),
          }),
        ),
        textInput: z.string(),
        textStream: z.string(),
      })
      .safeParse(JSON.parse(`${localStorage.getItem("proxy--chat")}`));

    proxyChat.list = [
      ...(data?.list || [
        {
          id: `${Math.random()}`,
          from: "user",
          message: "Hi!",
        },
        {
          id: `${Math.random()}`,
          from: "ai",
          message: "Hello!",
        },
      ]),
    ];

    proxyChat.textInput = data?.textInput || "";

    proxyChat.textStream = data?.textStream || "";

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
}
