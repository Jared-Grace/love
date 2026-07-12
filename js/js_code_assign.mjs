import { js_code_equals_padded } from "./js_code_equals_padded.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_assign(left, right) {
  let code = text_combine_multiple([left, js_code_equals_padded(), right]);
  return code;
}
