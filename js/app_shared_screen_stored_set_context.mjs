import { storage_session_set_context } from "./storage_session_set_context.mjs";
export function app_shared_screen_stored_set_context(context, screen_name) {
  "remember the screen you are on, for this tab only; the getter beside this one reads it back";
  storage_session_set_context(context, "screen", screen_name);
}
