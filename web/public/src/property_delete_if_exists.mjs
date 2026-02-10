import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function property_delete_if_exists(data, p) {
  let exists = object_property_exists(data, p);
  if (exists) {
    property_delete(data, p);
  }
}
