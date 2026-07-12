import { global_function_property_delete } from "./global_function_property_delete.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_enabled } from "./storage_local_enabled.mjs";
import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_remove(app_fn, key) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    localStorage.removeItem(storage_local_key);
    return;
  }
  global_function_property_delete(storage_local_set, storage_local_key);
}
