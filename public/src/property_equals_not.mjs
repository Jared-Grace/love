import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_equals_not(object, property_name, value) {
  let actual = property_get(object, property_name);
  let ne = equal_not(actual, value);
  return ne;
}
