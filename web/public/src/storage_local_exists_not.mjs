import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists_not(app_fn, key) {
  marker("1");
  let exists = storage_local_exists(app_fn, key);
  return exists;
}
