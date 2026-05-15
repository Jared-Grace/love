import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function property_transform_if_exists(property_name, lambda$value) {
  let exists = property_exists(object, property_name);
  if (exists) {
    property_transform(o, property_name, lambda$value);
  }
}
