import { global_function_property_get } from "../../../karate_code/public/src/global_function_property_get.mjs";
import { storage_local_enabled } from "../../../karate_code/public/src/storage_local_enabled.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export  function storage_local_get(app_fn, key) {
  marker("1");
  let storage_local_key = storage_local_key_get(app_fn, key);
  if (storage_local_enabled()) {
    let result = storage_local_specify_get(storage_local_key);
    return result;
  }
  let value =  global_function_property_get(fn, property_name);
}
