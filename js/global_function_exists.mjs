import { property_exists } from "./property_exists.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_exists(fn) {
  let global = global_get();
  let exists = property_exists(global, fn.name);
  return exists;
}
