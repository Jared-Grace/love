import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_property_is_assert } from "../../../love/public/src/js_property_is_assert.mjs";
export function js_property_value_set(found) {
  js_property_is_assert(found);
  let value = property_set(found, "value");
  return value;
}
