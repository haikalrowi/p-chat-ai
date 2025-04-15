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
            from: z.enum(["system", "user", "ai"]),
            message: z.string(),
          }),
        ),
        textInput: z.string(),
        textStream: z.string(),
      })
      .safeParse(JSON.parse(`${localStorage.getItem("proxy--chat")}`));

    proxyChat.list = data?.list || proxyChat.list;

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
}
