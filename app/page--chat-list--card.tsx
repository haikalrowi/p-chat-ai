import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export function ChatListCard({
  arg,
}: {
  arg: {
    from: "system" | "user" | "ai";
    message: string;
  };
}) {
  const { from, message } = arg;

  return {
    system: (
      <Alert className="mx-auto w-full max-w-prose">
        <Info />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    ),
    user: (
      <Card className="ml-auto w-full max-w-prose">
        <CardContent>
          <p>{message}</p>
        </CardContent>
      </Card>
    ),
    ai: <p className="mr-auto w-full max-w-prose">{message}</p>,
  }[from];
}
