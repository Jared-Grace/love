import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_delete(fn) {
  let global = global_get();
  property_delete(global, fn.name);
}
