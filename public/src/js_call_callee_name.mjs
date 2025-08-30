import { log } from "./log.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { object_property_get_name } from "./object_property_get_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_call_callee_name(expression) {
  let name = null;
  let jin2 = js_node_type_not_is(expression, "CallExpression");
  if (jin2) {
    log(expression);
    return name;
  }
  let callee = object_property_get(expression, "callee");
  let jin = js_identifier_not_is(callee);
  if (jin) {
    return name;
  }
  name = object_property_get_name(callee);
  return name;
}
