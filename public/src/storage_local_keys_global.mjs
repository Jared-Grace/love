import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
export function storage_local_keys_global() {
  let fn_object = global_function_initialize(storage_local_set, {});
  let properties = properties_get(fn_object);
  return properties;
}
