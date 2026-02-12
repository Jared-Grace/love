import { js_keyword_true } from "../../../love/public/src/js_keyword_true.mjs";
import { js_parse_expression_replace } from "../../../love/public/src/js_parse_expression_replace.mjs";
export function js_dollar_t({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  return;
  let code_expression = js_keyword_true();
  js_parse_expression_replace(code_expression, node);
}
