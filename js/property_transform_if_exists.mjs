import { property_transform } from "./property_transform.mjs";
import { property_exists } from "./property_exists.mjs";
export function property_transform_if_exists(
  object,
  property_name,
  lambda$value,
) {
  let exists = property_exists(object, property_name);
  if (exists) {
    property_transform(object, property_name, lambda$value);
  }
}
