import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_braces_empty } from "../../../love/public/src/js_code_braces_empty.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
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
  js_node_type_is_assert(stack1, "ExpressionStatement");
  object_property_set(stack1, "expression", parsed);
  return;
  log("jg");
}
