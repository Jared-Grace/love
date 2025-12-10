import { storage_local_specify_get_json } from "../../../love/public/src/storage_local_specify_get_json.mjs";
import { storage_local_exists_global } from "../../../love/public/src/storage_local_exists_global.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    let json = storage_local_specify_get_json(storage_local_key);
    let v = json !== null;
    return v;
  }
  let value = storage_local_exists_global(storage_local_key);
  return value;
}
