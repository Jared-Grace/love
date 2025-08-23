import { marker } from "./marker.mjs";
import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_get(app_fn, key, value) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  let value = localStorage.getItem(storage_local_key);
  return value;
}
