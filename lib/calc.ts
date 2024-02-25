export function parseMathExpression(expression: string): number {
  let exp = expression.replace(/×/g, "*").replace(/÷/g, "/");
  return eval(exp);
}

export function isEndsWithOperator(value: string): boolean {
  return ["+", "-", "×", "÷", "%"].includes(value.slice(-1));
}

export function getOperand(value: string): string {
  return value.split(/[-+×÷%]/).pop() || "";
}
