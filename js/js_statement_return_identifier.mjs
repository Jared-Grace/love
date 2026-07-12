import { js_statement_return_argument } from "./js_statement_return_argument.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_statement_return_identifier(name_result) {
  let expression = js_parse_expression(name_result);
  let ret = js_statement_return_argument(expression);
  return ret;
}
