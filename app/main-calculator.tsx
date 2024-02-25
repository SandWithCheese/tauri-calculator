"use client";

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
import { useEffect, useRef, useState } from "react";
import {
  getOperand,
  isEndsWithOperator,
  parseMathExpression,
} from "@/lib/calc";
import { Textarea } from "@/components/ui/textarea";

function MainCalculator() {
  const [input, setInput] = useState("0");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }),
    [textAreaRef.current, input];

  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center text-foreground">
      <section className="flex w-full max-w-96 grow flex-col justify-end py-2">
        <Textarea
          className="h-[76px] min-h-[76px] resize-none overflow-ellipsis border-none text-6xl disabled:cursor-default disabled:opacity-100"
          disabled
          value={input}
          ref={textAreaRef}
        />
      </section>
      <Separator className="max-w-96" />
      <section className="grid w-full max-w-96 grid-cols-4 gap-2 py-2">
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => setInput("0")}
        >
          {input === "0" ? "AC" : "C"}
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (input.length === 1) {
              setInput("0");
            } else if (input !== "0") {
              setInput(input.slice(0, -1));
            }
          }}
        >
          <Delete />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (!isEndsWithOperator(input)) {
              const operand = getOperand(input);
              if (operand !== "" && operand !== "0") {
                setInput(
                  `${input.slice(0, input.indexOf(operand))}${String(Number(operand) / 100)}`,
                );
              }
            }
          }}
        >
          <Percent />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (!isEndsWithOperator(input)) {
              setInput(`${input}÷`);
            } else {
              setInput(input.slice(0, -1) + "÷");
            }
          }}
        >
          <Divide />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("7");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}7`);
              } else {
                setInput(input.slice(0, -1) + "7");
              }
            }
          }}
        >
          7
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("8");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}8`);
              } else {
                setInput(input.slice(0, -1) + "8");
              }
            }
          }}
        >
          8
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("9");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}9`);
              } else {
                setInput(input.slice(0, -1) + "9");
              }
            }
          }}
        >
          9
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (!isEndsWithOperator(input)) {
              setInput(`${input}×`);
            } else {
              setInput(input.slice(0, -1) + "×");
            }
          }}
        >
          <X />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("4");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}4`);
              } else {
                setInput(input.slice(0, -1) + "4");
              }
            }
          }}
        >
          4
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("5");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}5`);
              } else {
                setInput(input.slice(0, -1) + "5");
              }
            }
          }}
        >
          5
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("6");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}6`);
              } else {
                setInput(input.slice(0, -1) + "6");
              }
            }
          }}
        >
          6
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (!isEndsWithOperator(input)) {
              setInput(`${input}-`);
            } else {
              setInput(input.slice(0, -1) + "-");
            }
          }}
        >
          <Minus />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("1");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}1`);
              } else {
                setInput(input.slice(0, -1) + "1");
              }
            }
          }}
        >
          1
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("2");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}2`);
              } else {
                setInput(input.slice(0, -1) + "2");
              }
            }
          }}
        >
          2
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("3");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}3`);
              } else {
                setInput(input.slice(0, -1) + "3");
              }
            }
          }}
        >
          3
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => {
            if (!isEndsWithOperator(input)) {
              setInput(`${input}+`);
            } else {
              setInput(input.slice(0, -1) + "+");
            }
          }}
        >
          <Plus />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("0");
            } else {
              const operand = getOperand(input);
              if (operand !== "" && operand !== "0") {
                setInput(`${input}00`);
              }
            }
          }}
        >
          00
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            if (input === "0") {
              setInput("0");
            } else {
              const operand = getOperand(input);
              if (operand !== "0") {
                setInput(`${input}0`);
              }
            }
          }}
        >
          0
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg hover:cursor-default hover:bg-zinc-200"
          onClick={() => {
            const operand = getOperand(input);
            if (!operand.includes(".")) {
              setInput(`${input}.`);
            }
          }}
        >
          <Dot />
        </Button>
        <Button
          variant={"ghost"}
          className="text-lg text-primary hover:cursor-default hover:bg-zinc-200 hover:text-primary"
          onClick={() => setInput(String(parseMathExpression(input) || 0))}
        >
          <Equal />
        </Button>
      </section>
    </main>
  );
}

export default MainCalculator;
