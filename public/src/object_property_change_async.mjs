import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_change_async(o, property, lambda$value) {
  marker("1");
  let value = object_property_get(o, property);
  value = lambda$value(value);
  object_property_set(o, property, value);
  return value;
}
