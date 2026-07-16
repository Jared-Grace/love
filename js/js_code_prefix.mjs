import { text_combine } from "./text_combine.mjs";
export function js_code_prefix(operator, operand) {
  "code for a unary PREFIX operator applied to an operand, with no space between (e.g. !true, -5)";
  let combined = text_combine(operator, operand);
  return combined;
}
