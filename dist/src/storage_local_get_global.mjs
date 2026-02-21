import { storage_local_exists_global } from "../../../love/public/src/storage_local_exists_global.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function storage_local_get_global(storage_local_key) {
  let exists = storage_local_exists_global(storage_local_key);
  ("localStorage has this behavior of null if not exists, so the in-memory version also mirrors api");
  let value = null;
  if (exists) {
    value = global_function_property_get(storage_local_set, storage_local_key);
  }
  return value;
}
