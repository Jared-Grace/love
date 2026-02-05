import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
import { global_function_exists } from "../../../love/public/src/global_function_exists.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function storage_local_enabled() {
  let set = global_function_exists(storage_local_enabled);
  let enabled = not(set) || global_function_get(storage_local_enabled) === true;
  return enabled;
}
