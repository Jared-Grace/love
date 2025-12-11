import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_braces_empty } from "../../../love/public/src/js_code_braces_empty.mjs";
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
  let v = js_code_braces_empty();
  let code = js_code_call_args(log.name, [v]);
  let parsed = js_parse_expression(code);
  log(message);
  object_replace(node, parsed);
}
