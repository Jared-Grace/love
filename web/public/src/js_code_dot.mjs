import { text_dot } from "../../../love/public/src/text_dot.mjs";
export function js_code_dot(left, right) {
  let code = "(" + left + text_dot() + right + ")";
  return code;
}
