import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
export function js_expression_is(code) {
  let expression = js_parse_expression_try(code);
  let expression_is = null_not_is(expression);
  return expression_is;
}
