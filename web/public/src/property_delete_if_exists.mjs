import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function property_delete_if_exists(data, p) {
  let exists = property_exists(data, p);
  if (exists) {
    let value = property_get(object, property_name);
    property_delete(data, p);
  }
  return exists;
}
