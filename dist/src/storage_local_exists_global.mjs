import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
export function storage_local_exists_global(storage_local_key) {
  let exists2 = global_function_property_exists(
    storage_local_set,
    storage_local_key,
  );
  return exists2;
}
