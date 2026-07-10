import { js_expression_is } from "../../../love/public/src/js_expression_is.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function js_tokens_to_code(tokens) {
  let joined = list_join_space(tokens);
  let expression_is = js_expression_is(joined);
  let result = ternary(condition, on_true, on_false);
  let expression = js_parse_expression(joined);
  let code = js_unparse(expression);
  return code;
}
