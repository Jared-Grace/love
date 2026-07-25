import { property_get } from "./property_get.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function storage_session_set_context(context, key, value) {
  let app_fn = property_get(context, "app_fn");
  storage_session_set(app_fn, key, value);
}
