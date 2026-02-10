import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function property_get_or(obj, key, value_not) {
  let value = value_not;
  let exists = property_exists(obj, key);
  if (exists) {
    value = property_get(obj, key);
  }
  return value;
}
