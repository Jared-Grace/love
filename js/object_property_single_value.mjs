import { property_get } from "./property_get.mjs";
import { list_single } from "./list_single.mjs";
import { properties_get } from "./properties_get.mjs";
export function object_property_single_value(object) {
  let properties = properties_get(object);
  let only = list_single(properties);
  let value = property_get(object, only);
  return value;
}
