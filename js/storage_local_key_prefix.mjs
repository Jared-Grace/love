import { property_get } from "./property_get.mjs";
import { storage_local_key_get } from "./storage_local_key_get.mjs";
export function storage_local_key_prefix(context) {
  let app_fn = property_get(context, "app_fn");
  let prefix = storage_local_key_get(app_fn, "");
  return prefix;
}
