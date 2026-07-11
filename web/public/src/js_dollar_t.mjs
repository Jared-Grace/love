import { js_keyword_true } from "../../../love/public/src/js_keyword_true.mjs";
import { js_parse_expression_replace } from "../../../love/public/src/js_parse_expression_replace.mjs";
export function js_dollar_t({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let code_expression = js_keyword_true();
  js_parse_expression_replace(code_expression, node);
  return;
}
