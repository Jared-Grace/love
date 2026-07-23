import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { log } from "./log.mjs";
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
  let parsed = js_call_args_from_code(log.name, [n, v]);
  let code2 = js_unparse(node);
  object_replace(node, parsed);
}
