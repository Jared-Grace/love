import { js_code_equals_padded } from "../../../love/public/src/js_code_equals_padded.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_assign(left, right) {
  const code = text_combine_multiple([left, js_code_equals_padded(), right]);
  return code;
}
