import { null_is } from "./null_is.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { marker } from "./marker.mjs";
export function storage_local_get_or(app_fn, key, value_or) {
  marker("1");
  let value = storage_local_get(app_fn, key);
  if (false) {
    let result = null_is(value2);
  }
  return value;
}
