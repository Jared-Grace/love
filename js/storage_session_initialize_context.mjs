import { property_get } from "./property_get.mjs";
import { storage_session_initialize } from "./storage_session_initialize.mjs";
export function storage_session_initialize_context(
  context,
  key,
  value_initial,
) {
  let app_fn = property_get(context, "app_fn");
  let value = storage_session_initialize(app_fn, key, value_initial);
  return value;
}
