import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_set(app_fn, key, value) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  storage_local_specify_set(value, storage_local_key);
}
