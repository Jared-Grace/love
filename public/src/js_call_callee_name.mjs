import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { js_identifier_not_is } from "../../../love/public/src/js_identifier_not_is.mjs";
import { object_property_get_name } from "../../../love/public/src/object_property_get_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_call_callee_name(expression) {
  let name = null;
  let jin2 = js_node_type_not_is(expression, "CallExpression");
  if (jin2) {
    return name;
  }
  let callee = property_get(expression, "callee");
  let jin = js_identifier_not_is(callee);
  if (jin) {
    return name;
  }
  name = object_property_get_name(callee);
  return name;
}
