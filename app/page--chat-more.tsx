import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Plus } from "lucide-react";

export function ChatMore() {
  return (
    <Popover>
      <PopoverTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent sideOffset={4 * 2}>
        <div
          className={cn("flex flex-col gap-4", "*:flex *:flex-wrap *:gap-4")}
        >
          <div>
            <ModeToggle />
          </div>
          <div>
            <Button>
              <Plus /> New chat
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
