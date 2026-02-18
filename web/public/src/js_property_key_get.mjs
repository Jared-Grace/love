import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_property_is_assert } from "../../../love/public/src/js_property_is_assert.mjs";
export function js_property_key_get(p) {
  js_property_is_assert(p);
  let key = property_get(p, "key");
  return key;
}
