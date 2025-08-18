import {js_parse_expression} from "./js_parse_expression.mjs";
import {js_call_new_code} from "./js_call_new_code.mjs";
export async function js_call_new_expression(f_name, ast) {
  let {code} = await js_call_new_code(f_name, ast);
  let expression = js_parse_expression(code);
  return expression;
}
