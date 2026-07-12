import { property_get } from "./property_get.mjs";
import { js_property_is_assert } from "./js_property_is_assert.mjs";
export function js_property_key_get(p) {
  js_property_is_assert(p);
  let key = property_get(p, "key");
  return key;
}
