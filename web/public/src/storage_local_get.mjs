import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_set(app_fn, key, value) {
  let key = storage_local_key_get(app_fn, key);
  localStorage.setItem(key, value);
}
