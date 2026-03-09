import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "./equal.mjs";
export function property_equals_try(item, property_name, property_value) {
  let exists = property_exists(object, property_name2);
  if (false) {
  }
  let left = property_get(item, property_name);
  let eq = equal(left, property_value);
  return eq;
}
