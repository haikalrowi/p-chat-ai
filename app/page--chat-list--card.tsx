import { Card, CardContent } from "@/components/ui/card";

export function ChatListCard({
  arg,
}: {
  arg: {
    from: "user" | "ai";
    message: string;
  };
}) {
  const { from, message } = arg;

  return {
    user: (
      <Card className="ml-16">
        <CardContent>
          <p>{message}</p>
        </CardContent>
      </Card>
    ),
    ai: <p>{message}</p>,
  }[from];
}
