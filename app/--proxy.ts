import { proxy } from "valtio";

export const proxyChat = proxy<{
  list: {
    id: string;
    from: "user" | "ai";
    message: string;
  }[];
}>({
  list: [
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
  ],
});
