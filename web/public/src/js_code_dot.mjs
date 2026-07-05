import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
export function js_code_dot(left, right) {
  let code = "(" + left + js_operator_dot() + right + ")";
  return code;
}
