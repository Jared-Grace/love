import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
export function property_equals_not(object, property_name, value) {
  let actual = property_get(object, property_name);
  let ne = equal_not(actual, value);
  return ne;
}
