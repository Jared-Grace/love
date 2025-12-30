import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
import { global_alternate_set } from "../../../love/public/src/global_alternate_set.mjs";
import { global_function_exists } from "../../../love/public/src/global_function_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
let global = {};
export function global_get() {
  let exists = global_function_exists(global_alternate_set);
  if (exists) {
    let value = global_function_get(global_alternate_set);
    return value;
  }
  return global;
}
