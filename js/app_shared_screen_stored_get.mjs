import { storage_session_get_context } from "./storage_session_get_context.mjs";
export function app_shared_screen_stored_get(context) {
  "one place decides where the name of the screen you are on is kept, so every reader and writer of it agrees";
  "which screen you are looking at belongs to the tab you are looking at, so two tabs of the same app can sit on different screens";
  let value = storage_session_get_context(context, "screen");
  return value;
}
