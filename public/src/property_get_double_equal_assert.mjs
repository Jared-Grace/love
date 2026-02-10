import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_double_equal_assert(o1, o2, property_name) {
  let value = property_get(o1, property_name);
  let value2 = property_get(o2, property_name);
  equal_assert(value, value2);
  return value;
}
