import { js_code_equals_padded } from "../../../love/public/src/js_code_equals_padded.mjs";
export function js_code_assign(left, right) {
  const code = left + js_code_equals_padded() + right;
  return code;
}
