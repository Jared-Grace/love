import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_exists(item3, property_name_a, property_name_b) {
  let value = property_get(item3, property_name_a);
  let r2 = property_exists(value, property_name_b);
  return r2;
}
