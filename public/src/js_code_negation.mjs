import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function js_code_negation(d) {
  let left = js_operator_minus();
  let combined2 = text_combine(left, d);
  return combined2;
}
