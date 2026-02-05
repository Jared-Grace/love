import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_delete(fn) {
  let global = global_get();
  object_property_delete(global, fn.name);
}
