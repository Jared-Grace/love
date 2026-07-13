import { js_property_key_get } from "./js_property_key_get.mjs";
import { property_get } from "./property_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { js_string } from "./js_string.mjs";
export function js_property_key_string_expression(property) {
  let key = js_property_key_get(property);
  let computed = property_get(property, "computed");
  if (computed) {
    return object_copy(key);
  }
  if (js_identifier_is(key)) {
    let name = js_identifier_name(key);
    return js_string(name);
  }
  return object_copy(key);
}
