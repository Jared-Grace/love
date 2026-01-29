import { storage_local_remove } from "../../../love/public/src/storage_local_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_remove_context(app_fn, key) {
  marker("1");
  let v = storage_local_remove(app_fn, key);
  return v;
}
