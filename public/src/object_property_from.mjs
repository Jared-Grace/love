import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function object_property_from(to, property_name, from) {
  let value = object_property_get(from, property_name);
  object_property_set(to, property_name, value);
}
