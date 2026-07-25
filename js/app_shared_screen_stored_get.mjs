import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_shared_screen_stored_get(context) {
  "one place decides where the name of the screen you are on is kept, so every reader and writer of it agrees";
  let value = storage_local_get_context(context, "screen");
  return value;
}
