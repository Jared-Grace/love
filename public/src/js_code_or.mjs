import { js_operator_or } from "./js_operator_or.mjs";
export function js_code_or(left, right) {
  let v2 = left + js_operator_or() + right;
  return v2;
}
