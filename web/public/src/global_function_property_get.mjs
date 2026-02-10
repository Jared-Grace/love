import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function global_function_property_get(fn, property_name) {
  let fn_object = global_function_initialize(fn, {});
  let value = property_get(fn_object, property_name);
  return value;
}
