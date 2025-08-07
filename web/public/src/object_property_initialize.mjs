import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_initialize(object, property_name) {
  const exists = object_property_exists(object, property_name);
  if (!exists) {
  }
  let aliases = object_property_get(object, property_name);
}
