import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_find_return } from "../../../love/public/src/js_find_return.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
export function js_find_return_argument_set(ast, code) {
  let only = js_find_return(ast);
  let expression = js_parse_expression(code);
  js_return_argument_set(only, expression);
}
