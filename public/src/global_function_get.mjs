import { property_get } from "./property_get.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_get(fn) {
  let global = global_get();
  let value = property_get(global, fn.name);
  return value;
}
