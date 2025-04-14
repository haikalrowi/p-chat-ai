"use server";

export async function actionChatSend() {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 2));
}
