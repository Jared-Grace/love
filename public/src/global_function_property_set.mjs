import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_set(fn, property_name, value) {
  marker("1");
  let fn_object = global_function_get(fn);
  object_property_set(fn_object, property_name, value);
}
