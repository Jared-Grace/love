import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_or(left, right) {
  let v = text_combine_multiple([left, js_operator_or_symbol(), right]);
  return v;
}
