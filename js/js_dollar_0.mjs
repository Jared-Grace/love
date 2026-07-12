import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
export function js_dollar_0({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let code_expression = js_keyword_false();
  js_parse_expression_replace(code_expression, node);
}
