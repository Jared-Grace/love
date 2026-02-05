import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_exists(fn) {
  let global = global_get();
  let exists = object_property_exists(global, fn.name);
  return exists;
}
