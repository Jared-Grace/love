import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function object_property_get_or(obj, key, value_not) {
  let value = value_not;
  let exists = property_exists(obj, key);
  if (exists) {
    value = object_property_get(obj, key);
  }
  return value;
}
