import { global_get } from "../../../love/public/src/global_get.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
export function global_alternate_set(value) {
  let global = global_get();
  global_function_set(global_alternate_set, value);
}
