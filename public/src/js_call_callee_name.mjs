import { object_property_get_name } from "./object_property_get_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_call_callee_name(expression) {
  let callee = object_property_get(expression, "callee");
  let name = object_property_get_name(callee);
  return name;
}
