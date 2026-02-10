import { property_get } from "../../../love/public/src/property_get.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export function storage_local_get_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let value = storage_local_get(app_fn, key);
  return value;
}
