import { property_get } from "./property_get.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
export function storage_local_remove_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let v = storage_local_remove(app_fn, key);
  return v;
}
