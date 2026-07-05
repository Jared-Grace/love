import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function js_code_negation(n) {
  let left = js_operator_minus();
  let negated = text_combine(left, n);
  return negated;
}
