import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, initial) {
  let global = global_get();
  let value = object_property_initialize(global, fn.name, initial);
  return value;
}
