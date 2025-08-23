import { storage_local_get } from "./storage_local_get.mjs";
import { marker } from "./marker.mjs";
export function storage_local_get_or(app_fn, key) {
  marker("1");
  return storage_local_get(app_fn, key);
}
