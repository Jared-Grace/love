import { global_function_property_delete } from "./global_function_property_delete.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_enabled } from "./storage_local_enabled.mjs";
export function storage_local_specify_remove(storage_local_key) {
  "remove one entry by its physical key — the composite-level twin of storage removal that takes app_fn plus key; the corruption net knows only the physical key the error carried";
  if (storage_local_enabled()) {
    localStorage.removeItem(storage_local_key);
    return;
  }
  global_function_property_delete(storage_local_set, storage_local_key);
}
