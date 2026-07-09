import { catch_ignore } from "../../../love/public/src/catch_ignore.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_parse_expression_try(joined) {
  let expression = null;
  function lambda() {
    expression = js_parse_expression(joined);
  }
  catch_ignore(lambda);
  return expression;
}
