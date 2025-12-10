import { storage_local_exists_global } from "../../../love/public/src/storage_local_exists_global.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    let result = storage_local_specify_exists(storage_local_key);
    return result;
  }
  let value = storage_local_exists_global(storage_local_key);
  return value;
}
