import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function property_get_equal(item, property_name, value) {
  let result = property_get(item, property_name);
  let eq = equal(result, value);
  return eq;
}
