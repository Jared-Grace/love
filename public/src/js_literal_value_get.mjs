import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_literal_is_assert } from "../../../love/public/src/js_literal_is_assert.mjs";
export function js_literal_value_get(value) {
  js_literal_is_assert(value);
  let value2 = property_get(value, "value");
  return value2;
}
