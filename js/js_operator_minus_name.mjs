import { js_operator_minus_name_root } from "./js_operator_minus_name_root.mjs";
import { text_combine } from "./text_combine.mjs";
export function js_operator_minus_name() {
  let n = text_combine(js_operator_minus_name_root(), " sign");
  return n;
}
