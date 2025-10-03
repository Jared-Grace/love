import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { global_function_exists } from "../../../love/public/src/global_function_exists.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_enabled() {
  marker("1");
  let set = global_function_exists(storage_local_disable);
  let enabled = not(set) || global_function_get(storage_local_disable) === true;
  return enabled;
}
