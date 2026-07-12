import { storage_local_set } from "./storage_local_set.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
export function storage_local_exists_global(storage_local_key) {
  let exists = global_function_property_exists(
    storage_local_set,
    storage_local_key,
  );
  return exists;
}
