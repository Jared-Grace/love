import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { storage_local_specify_set } from "../../../love/public/src/storage_local_specify_set.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
export function storage_local_set(app_fn, key, value) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    storage_local_specify_set(storage_local_key, value);
    return;
  }
  global_function_property_set(storage_local_set, storage_local_key, value);
}
