import { property_get } from "./property_get.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function storage_local_exists_not_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let exists = storage_local_exists_not(app_fn, key);
  return exists;
}
