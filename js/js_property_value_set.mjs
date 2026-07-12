import { property_set } from "./property_set.mjs";
import { js_property_is_assert } from "./js_property_is_assert.mjs";
export function js_property_value_set(p, value) {
  js_property_is_assert(p);
  property_set(p, "value", value);
}
