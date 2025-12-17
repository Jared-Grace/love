import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
export function js_identifier_name(i) {
  js_identifier_is_assert(i);
  let name = object_property_get(i, "name");
  return name;
}
