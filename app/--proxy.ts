import { proxy } from "valtio";

export const proxyChat = proxy<{
  list: {
    id: string;
    from: "system" | "user" | "ai";
    message: string;
  }[];
  textInput: string;
  textStream: string;
}>({
  list: [],
  textInput: "",
  textStream: "",
});
