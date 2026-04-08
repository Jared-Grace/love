import { property_set_if_exists_not } from "../../../love/public/src/property_set_if_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_initialize(object, property_name, value_initial) {
  property_set_if_exists_not(object, property_name, value_initial);
  let value = property_get(object, property_name);
  return value;
}
