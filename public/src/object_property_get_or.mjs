import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function object_property_get_or(value_not, obj, key) {
  let value3 = value_not;
  let exists = object_property_exists(obj, key);
  if (exists) {
    value3 = object_property_get(obj, key);
  }
  return value3;
}
