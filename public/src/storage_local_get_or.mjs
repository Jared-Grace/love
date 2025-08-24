import { storage_local_set } from "./storage_local_set.mjs";
import { null_is } from "./null_is.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { marker } from "./marker.mjs";
export function storage_local_get_or(app_fn, key, value_or) {
  marker("1");
  let value = storage_local_get(app_fn, key);
  let n = null_is(value);
  if (n) {
    storage_local_set(app_fn2, key2, value2);
    return value_or;
  }
  return value;
}
