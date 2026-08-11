import { property_get } from "./property_get.mjs";
import { app_shared_screen_stored_set } from "./app_shared_screen_stored_set.mjs";
export function app_shared_screen_stored_set_context(context, screen_name) {
  "remember the screen you are on, for this tab only; the getter beside this one reads it back";
  let app_fn = property_get(context, "app_fn");
  app_shared_screen_stored_set(app_fn, screen_name);
}
