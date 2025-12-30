import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_delete(fn) {
  marker("1");
  let global = global_get();
  object_property_delete(global, fn.name);
}
