import { property_get } from "./property_get.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
export function storage_session_get_context(context, key) {
  let app_fn = property_get(context, "app_fn");
  let value = storage_session_get(app_fn, key);
  return value;
}
