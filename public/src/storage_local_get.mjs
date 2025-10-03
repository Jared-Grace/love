import { global_function_property_exists } from "../../../karate_code/public/src/global_function_property_exists.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
import { storage_local_specify_get } from "../../../love/public/src/storage_local_specify_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_get(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    let result = storage_local_specify_get(storage_local_key);
    return result;
  }
  let value2 = global_function_property_exists(fn, property_name);
  let value = global_function_property_get(storage_local_set, key);
  return value;
}
