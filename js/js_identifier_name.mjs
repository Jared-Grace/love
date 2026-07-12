import { property_get } from "./property_get.mjs";
import { js_identifier_is_assert } from "./js_identifier_is_assert.mjs";
export function js_identifier_name(i) {
  js_identifier_is_assert(i);
  let name = property_get(i, "name");
  return name;
}
