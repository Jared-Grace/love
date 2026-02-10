import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
export function global_alternate_set(global_alternate) {
  let global = global_get();
  global_function_set(global_alternate_set, global_alternate);
  let unset = function lambda() {
    property_delete(global, global_alternate_set.name);
  };
  return unset;
}
