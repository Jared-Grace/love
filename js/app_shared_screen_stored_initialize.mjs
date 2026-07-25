import { property_get } from "./property_get.mjs";
import { storage_session_initialize } from "./storage_session_initialize.mjs";
export function app_shared_screen_stored_initialize(context, screen_name_home) {
  "a tab opened just now remembers no screen, so it starts at home and remembers that";
  let app_fn = property_get(context, "app_fn");
  let value = storage_session_initialize(app_fn, "screen", screen_name_home);
  return value;
}
