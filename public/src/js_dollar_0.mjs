import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_keyword_false } from "../../../love/public/src/js_keyword_false.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
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
  let expression = js_parse_expression(code_expression);
  object_replace(to, from);
  return expression;
}
