import { Button } from "@/components/ui/button";
import {
  Delete,
  Divide,
  Percent,
  Plus,
  Minus,
  X,
  Dot,
  Equal,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function MainCalculator() {
  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center text-foreground">
      <section className="flex w-full max-w-96 grow flex-col justify-end py-2">
        <Input className="border-none disabled:cursor-default" disabled />
      </section>
      <Separator className="max-w-96" />
      <section className="grid w-full max-w-96 grid-cols-4 gap-2 py-2">
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          AC
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Delete />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Percent />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Divide />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          7
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          8
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          9
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <X />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          4
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          5
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          6
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Minus />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          1
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          2
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          3
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Plus />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          00
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          0
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
        >
          <Dot />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
        >
          <Equal />
        </Button>
      </section>
    </main>
  );
}

export default MainCalculator;
