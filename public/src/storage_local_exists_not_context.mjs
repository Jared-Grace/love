import { storage_local_exists_not } from "../../../love/public/src/storage_local_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists_not_context(app_fn, key) {
  marker("1");
  let exists = storage_local_exists_not(app_fn, key);
  return exists;
}
