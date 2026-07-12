import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_expression_string(text) {
  let code_string = js_code_string(text);
  let e = js_parse_expression(code_string);
  return e;
}
