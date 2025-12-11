import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
export function js_dollar_l({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let result = list_join_comma(remaining);
  let v = js_code_wrap_braces(result);
  let code = js_code_call_args(log.name, [v]);
  let parsed = js_parse_expression(code);
  let code2 = js_unparse(node);
  object_replace(node, parsed);
}
