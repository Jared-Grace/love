import { list_join_comma } from "./list_join_comma.mjs";
import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_dollar_log(remaining, node, log_fn_name) {
  "the name slot is left empty - the auto pass writes in the function the call sits in";
  let result = list_join_comma(remaining);
  let n = js_keyword_null();
  let v = js_code_wrap_braces(result);
  let parsed = js_call_args_from_code(log_fn_name, [n, v]);
  js_unparse(node);
  object_replace(node, parsed);
}
