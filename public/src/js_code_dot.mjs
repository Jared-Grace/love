import { string_dot } from "../../../love/public/src/string_dot.mjs";
export function js_code_dot(left, right) {
  let code = "(" + left + string_dot() + right + ")";
  return code;
}
