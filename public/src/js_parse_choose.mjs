import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { js_expression_is } from "../../../love/public/src/js_expression_is.mjs";
export function js_parse_choose(joined) {
  let expression_is = js_expression_is(joined);
  let parse = ternary(expression_is, js_parse_expression, js_parse);
  return parse;
}
