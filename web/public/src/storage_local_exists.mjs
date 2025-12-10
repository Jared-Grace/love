import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists(app_fn, key) {
  marker("1");
  return storage_local_get(app_fn, key);
}
