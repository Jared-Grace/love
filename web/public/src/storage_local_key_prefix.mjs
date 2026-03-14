import { property_get } from "../../../love/public/src/property_get.mjs";
import { storage_local_key_get } from "../../../love/public/src/storage_local_key_get.mjs";
export function storage_local_key_prefix(context) {
  let app_fn = property_get(context, "app_fn");
  let prefix = storage_local_key_get(app_fn, "");
  return prefix;
}
