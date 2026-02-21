import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_property_is_assert } from "../../../love/public/src/js_property_is_assert.mjs";
export function js_property_value_get(found) {
  js_property_is_assert(found);
  let value = property_get(found, "value");
  return value;
}
