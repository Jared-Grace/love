import { null_not_is } from "./null_not_is.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
export function js_expression_is(code) {
  let expression = js_parse_expression_try(code);
  let expression_is = null_not_is(expression);
  return expression_is;
}
