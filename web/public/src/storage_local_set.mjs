import { json_to } from "../../../love/public/src/json_to.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_set(app_fn, key, value) {
  let storage_local_key = storage_local_key_get(app_fn, key);
  newFunction(value, storage_local_key);
}

function newFunction(value, storage_local_key) {
  let v = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, v);
}
