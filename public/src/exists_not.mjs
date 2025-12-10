import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function exists_not(app_fn, key, value) {
  marker("1");
  return storage_local_set(app_fn, key, value);
}
