import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_text } from "../../../love/public/src/js_code_text.mjs";
export function js_expression_text(screen_name) {
  let code_string = js_code_text(screen_name);
  let key = js_parse_expression(code_string);
  return key;
}
