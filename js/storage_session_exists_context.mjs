import { property_get } from "./property_get.mjs";
import { storage_session_exists } from "./storage_session_exists.mjs";
export function storage_session_exists_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let exists = storage_session_exists(app_fn, key);
  return exists;
}
