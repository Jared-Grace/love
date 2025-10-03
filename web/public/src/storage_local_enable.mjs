import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_enable() {
  marker("1");
  global_function_set(storage_local_disable, false);
}
