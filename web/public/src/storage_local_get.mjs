import { null_is } from "./null_is.mjs";
import { json_from } from "./json_from.mjs";
import { marker } from "./marker.mjs";
import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_get(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  let json = localStorage.getItem(storage_local_key);
  let n = null_is(json);
  if (false) {
  }
  let { value } = json_from(json);
  return value;
}
