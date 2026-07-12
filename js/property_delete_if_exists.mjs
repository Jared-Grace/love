import { property_get } from "./property_get.mjs";
import { property_delete } from "./property_delete.mjs";
import { property_exists } from "./property_exists.mjs";
export function property_delete_if_exists(object, property_name) {
  let exists = property_exists(object, property_name);
  let value = null;
  if (exists) {
    value = property_get(object, property_name);
    property_delete(object, property_name);
  }
  let r = {
    exists,
    value,
  };
  return r;
}
