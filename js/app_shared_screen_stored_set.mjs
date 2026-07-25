import { storage_local_set_context } from "./storage_local_set_context.mjs";
export function app_shared_screen_stored_set(context, screen_name) {
  "remember the screen you are on; the getter beside this one reads it back";
  storage_local_set_context(context, "screen", screen_name);
}
