import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_prefix } from "./js_code_prefix.mjs";
export function js_code_negation(n) {
  let left = js_operator_minus_symbol();
  let negated = js_code_prefix(left, n);
  return negated;
}
