import { null_is } from "../../../love/public/src/null_is.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_get(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  let json = localStorage.getItem(storage_local_key);
  let n = null_is(json);
  if (n) {
    return json;
  }
  let { value } = json_from(json);
  return value;
}
