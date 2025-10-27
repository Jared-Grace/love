import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_delete(fn, property_name) {
  marker("1");
  let fn_object = global_function_initialize(fn, {});
  let value = object_property_delete(fn_object, property_name);
  return value;
}
