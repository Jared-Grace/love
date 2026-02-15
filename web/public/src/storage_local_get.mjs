import { storage_local_get_global } from "../../../love/public/src/storage_local_get_global.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { storage_local_specify_get } from "../../../love/public/src/storage_local_specify_get.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_get(app_fn, key) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    let result = storage_local_specify_get(storage_local_key);
    return result;
  }
  let value = storage_local_get_global(storage_local_key);
  return value;
}
