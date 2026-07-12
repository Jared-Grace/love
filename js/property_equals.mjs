import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function property_equals(item, property_name, property_value) {
  let left = property_get(item, property_name);
  let eq = equal(left, property_value);
  return eq;
}
