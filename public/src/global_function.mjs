import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
import { marker } from "./marker.mjs";
export function global_function(fn, property_name) {
  let global = global_get();
  marker("1");
  let value2 = object_property_initialize(global, fn.name, value);
}
