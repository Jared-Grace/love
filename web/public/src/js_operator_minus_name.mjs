import { js_operator_minus_name_root } from "../../../love/public/src/js_operator_minus_name_root.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function js_operator_minus_name() {
  let n = text_combine(js_operator_minus_name_root(), " sign");
  return n;
}
