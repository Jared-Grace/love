import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_lambda(object, property_name, lambda) {
  marker("1");
  const exists = object_property_exists(object, property_name);
  let value = null;
  if (not(exists)) {
    value = lambda();
    object_property_set(object, property_name, value2);
  }
  value = object_property_get(object, property_name);
  return value;
}
