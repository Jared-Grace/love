import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_set(app_fn, key, value) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  localStorage.setItem(storage_local_key, value);
}
