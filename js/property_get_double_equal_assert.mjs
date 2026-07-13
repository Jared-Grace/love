import { equal_assert_json } from "./equal_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function property_get_double_equal_assert(o1, o2, property_name) {
  let value = property_get(o1, property_name);
  let value2 = property_get(o2, property_name);
  equal_assert_json(value, value2, {
    hint: "both objects should share the same value for this property — did they drift out of sync?",
    property_name,
  });
  return value;
}
