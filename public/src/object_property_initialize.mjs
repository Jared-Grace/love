import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_initialize(object, property_name, value) {
  const exists = object_property_exists(object, property_name);
  if (!exists) {
    object_property_set(object, property_name, value);
  }
  let value = object_property_get(object, property_name);
  return value;
}
