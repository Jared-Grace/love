import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export function property_set_if_exists_not(object, property_name, value) {
  let n = property_exists_not(object, property_name);
  if (n) {
    property_set(object, property_name, value);
  }
}
