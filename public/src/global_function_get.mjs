import { object_property_get } from "./object_property_get.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_get(fn) {
  let global = global_get();
  let value = object_property_get(global, fn.name);
  return value;
}
