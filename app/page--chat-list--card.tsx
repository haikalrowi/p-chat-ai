import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { mdToHtml } from "@/lib/md-to-html";
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
          <div
            className="prose prose-zinc dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: mdToHtml.processSync(message) }}
          />
        </CardContent>
      </Card>
    ),
    ai: (
      <div className="mr-auto w-full max-w-prose">
        <div
          className="prose prose-zinc dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: mdToHtml.processSync(message) }}
        />
      </div>
    ),
  }[from];
}
