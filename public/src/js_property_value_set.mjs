import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_property_is_assert } from "../../../love/public/src/js_property_is_assert.mjs";
export function js_property_value_set(p, value) {
  js_property_is_assert(p);
  property_set(p, "value", value);
}
