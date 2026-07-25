import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_shared_screen_stored_initialize(context, screen_name_home) {
  "first visit has no remembered screen, so fall back to home and remember that";
  let value = storage_local_initialize_context(
    context,
    "screen",
    screen_name_home,
  );
  return value;
}
