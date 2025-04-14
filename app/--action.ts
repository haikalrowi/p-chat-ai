"use server";

import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export async function actionChatSend({ arg }: { arg: { input: string } }) {
  const { input } = arg;
  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = streamText({
      model: google("gemini-2.0-flash-lite-preview-02-05"),
      prompt: input,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return stream.value;
}
