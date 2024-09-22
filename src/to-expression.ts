export function toExpression(value: string) {
  return new RegExp("^(" + value + ")$", "i");
}
