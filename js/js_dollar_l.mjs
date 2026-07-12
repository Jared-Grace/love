import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { log } from "./log.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_dollar_l({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let result = list_join_comma(remaining);
  let n = js_keyword_null();
  let v = js_code_wrap_braces(result);
  let code = js_code_call_args(log.name, [n, v]);
  let parsed = js_parse_expression(code);
  let code2 = js_unparse(node);
  object_replace(node, parsed);
}
