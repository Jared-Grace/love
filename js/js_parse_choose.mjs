import { js_parse } from "./js_parse.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { ternary } from "./ternary.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
export function js_parse_choose(joined) {
  "maybe " +
    js_parse +
    " should be renamed to js_parse_module and this fn to js_parse";
  let expression_is = js_expression_is(joined);
  let parse = ternary(expression_is, js_parse_expression, js_parse);
  let parsed = parse(joined);
  return parsed;
}
