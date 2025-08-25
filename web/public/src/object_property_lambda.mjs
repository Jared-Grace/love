import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_lambda(object, property_name, value) {
  marker("1");
  const exists = object_property_exists(object, property_name);
  if (not(exists)) {
    object_property_set(object, property_name, value);
  }
  value = object_property_get(object, property_name);
  return value;
}
