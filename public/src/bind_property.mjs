import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export function bind_property(object, property_name) {
  marker("1");
  let property_name2 = object_property_get(object, "property_name");
}
