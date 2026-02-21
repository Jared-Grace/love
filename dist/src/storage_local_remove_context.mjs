import { property_get } from "../../../love/public/src/property_get.mjs";
import { storage_local_remove } from "../../../love/public/src/storage_local_remove.mjs";
export function storage_local_remove_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let v = storage_local_remove(app_fn, key);
  return v;
}
