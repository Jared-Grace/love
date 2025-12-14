import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_change(o, property, change) {
  let value = object_property_get(o, property);
  value = change(value);
  object_property_set(o, property, value);
  return value;
}
