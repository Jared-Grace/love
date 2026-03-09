import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "./equal.mjs";
export function property_equals_try(item, property_name, property_value) {
  let n = property_exists_not(object, property_name2);
  if (n) {
    return false;
  }
  let left = property_get(item, property_name);
  let eq = equal(left, property_value);
  return eq;
}
