import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
export function js_code_parenthesis_list() {
  let r = [js_code_parenthesis_left(), js_code_parenthesis_right()];
  return r;
}
