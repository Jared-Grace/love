import { js_code_parenthesis_right } from "../../../love/public/src/js_code_parenthesis_right.mjs";
import { js_code_parenthesis_left } from "../../../love/public/src/js_code_parenthesis_left.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function text_wrap_parenthesis(inside) {
  let wrapped = text_combine_multiple([
    js_code_parenthesis_left(),
    inside,
    js_code_parenthesis_right(),
  ]);
  return wrapped;
}
