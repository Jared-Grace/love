import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_dot } from "../../../love/public/src/js_code_dot.mjs";
export function js_expression_dot(f_name, right) {
  let code = js_code_dot(f_name, right);
  let expression = js_parse_expression(code);
  return expression;
}
