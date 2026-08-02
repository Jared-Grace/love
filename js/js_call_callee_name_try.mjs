import { js_call_callee_try } from "./js_call_callee_try.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_callee_name_try(expression) {
  let name = null;
  let callee = js_call_callee_try(expression);
  let jin = js_identifier_not_is(callee);
  if (jin) {
    return name;
  }
  name = property_get_name(callee);
  return name;
}
