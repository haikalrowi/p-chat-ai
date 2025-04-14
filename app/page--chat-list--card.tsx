import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ChatListCard({
  arg,
}: {
  arg: {
    from: "user" | "ai";
    message: string;
  };
}) {
  const { from, message } = arg;

  return (
    <Card className={cn({ user: "ml-16", ai: "mr-16" }[from])}>
      <CardContent>
        <p>{message}</p>
      </CardContent>
    </Card>
  );
}
