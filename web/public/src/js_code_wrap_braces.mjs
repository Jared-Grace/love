import { js_code_brace_right } from "../../../love/public/src/js_code_brace_right.mjs";
import { js_code_brace_left } from "../../../love/public/src/js_code_brace_left.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_wrap_braces(inside) {
  let w = text_combine_multiple([
    js_code_brace_left(),
    inside,
    js_code_brace_right(),
  ]);
  return w;
}
