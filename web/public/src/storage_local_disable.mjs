import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
export function storage_local_disable() {
  marker("1");
  global_function_set(storage_local_enabled, true);
}
