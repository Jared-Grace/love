import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_calls_to_each_lambda_lambda6(c, name) {
  arguments_assert(arguments, 2);
  let jin = js_node_type_not_is(c, "CallExpression");
  if (jin) {
    return name;
  }
  let callee = property_get(c, "callee");
  let code = js_unparse(callee);
  return code;
}
