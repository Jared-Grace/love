import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
export function storage_local_get_global(storage_local_key) {
  let value = null;
  let exists = global_function_property_exists(
    storage_local_set,
    storage_local_key,
  );
  ("localStorage has this behavior, so the in-memory version also mirrors api");
  if (exists) {
    value = global_function_property_get(storage_local_set, storage_local_key);
  }
  return value;
}
