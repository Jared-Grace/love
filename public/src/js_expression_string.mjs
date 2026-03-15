import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
export function js_expression_string(text) {
  let code_string = js_code_string(text);
  let key = js_parse_expression(code_string);
  return key;
}
