import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_exists(fn) {
  marker("1");
  let global = global_get();
  let exists = object_property_exists(global, fn.name);
  return exists;
}
