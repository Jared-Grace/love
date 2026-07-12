import { json_equal } from "./json_equal.mjs";
import { property_get } from "./property_get.mjs";
export function property_equals_json(item, property_name, property_value) {
  let left = property_get(item, property_name);
  let v = json_equal(left, property_value);
  return v;
}
