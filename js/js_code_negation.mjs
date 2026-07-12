import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
export function js_code_negation(n) {
  let left = js_operator_minus_symbol();
  let negated = text_combine(left, n);
  return negated;
}
