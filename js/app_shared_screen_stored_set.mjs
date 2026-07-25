import { property_get } from "./property_get.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function app_shared_screen_stored_set(context, screen_name) {
  "remember the screen you are on, for this tab only; the getter beside this one reads it back";
  let app_fn = property_get(context, "app_fn");
  storage_session_set(app_fn, "screen", screen_name);
}
