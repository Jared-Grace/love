import { not } from "../../../love/public/src/not.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function object_property_initialize(
  object,
  property_name,
  value_initial,
) {
  const exists = property_exists(object, property_name);
  if (not(exists)) {
    object_property_set(object, property_name, value_initial);
  }
  let value = object_property_get(object, property_name);
  return value;
}
