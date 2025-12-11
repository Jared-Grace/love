import { js_code_brace_left } from "../../../love/public/src/js_code_brace_left.mjs";
export function js_code_wrap_braces(inside) {
  let v = js_code_brace_left() + inside + "}";
  return v;
}
