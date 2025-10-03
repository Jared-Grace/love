import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function global_function_property_set(fn, property_name, value) {
  marker("1");
  let fn_object = global_function_initialize(fn);
  object_property_set(fn_object, property_name, value);
}
