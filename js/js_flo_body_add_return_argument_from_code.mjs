import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_flo_body_add_return_argument } from "../../portfolio_qa/js/js_flo_body_add_return_argument.mjs";
export function js_flo_body_add_return_argument_from_code(ast, code_argument) {
  let expression = js_parse_expression(code_argument);
  let r = js_flo_body_add_return_argument(ast, expression);
  return r;
}
