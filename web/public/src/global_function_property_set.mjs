import { property_set } from "../../../love/public/src/property_set.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
export function global_function_property_set(fn, property_name, value) {
  let fn_object = global_function_initialize(fn, {});
  property_set(fn_object, property_name, value);
}
