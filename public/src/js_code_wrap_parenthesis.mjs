import { js_code_parenthesis_right } from "../../../love/public/src/js_code_parenthesis_right.mjs";
import { js_code_parenthesis_left } from "../../../love/public/src/js_code_parenthesis_left.mjs";
export function js_code_wrap_parenthesis(inside) {
  let v = js_code_parenthesis_left() +' ' + inside+' ' + js_code_parenthesis_right();
  return v;
}
