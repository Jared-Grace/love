import { global_function_initialize_object } from "./global_function_initialize_object.mjs";
import { property_exists } from "./property_exists.mjs";
export function global_function_property_exists(fn, property_name) {
  let fn_object = global_function_initialize_object(fn);
  let exists = property_exists(fn_object, property_name);
  return exists;
}
