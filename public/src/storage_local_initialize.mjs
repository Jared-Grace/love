import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function storage_local_initialize(app_fn, key, value_initial) {
  marker("1");
  let value = storage_local_get(app_fn, key);
  let n = null_is(value);
  if (n) {
    await storage_local_set(app_fn, key, value_initial);
    value = storage_local_get(app_fn, key);
  }
  return value;
}
