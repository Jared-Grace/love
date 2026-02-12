import { js_parse_expression_replace } from "../../../love/public/src/js_parse_expression_replace.mjs";
import { js_keyword_false } from "../../../love/public/src/js_keyword_false.mjs";
export function js_dollar_0({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let code_expression = js_keyword_false();
  js_parse_expression_replace(code_expression, node);
}
