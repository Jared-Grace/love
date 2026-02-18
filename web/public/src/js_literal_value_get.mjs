import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_literal_is_assert } from "../../../love/public/src/js_literal_is_assert.mjs";
export function js_literal_value_get(literal) {
  js_literal_is_assert(literal);
  let value = property_get(literal, "value");
  return value;
}
