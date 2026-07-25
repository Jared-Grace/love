import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
export function app_shared_screen_stored_initialize(context, screen_name_home) {
  "a tab opened just now remembers no screen, so it starts at home and remembers that";
  let value = storage_session_initialize_context(
    context,
    "screen",
    screen_name_home,
  );
  return value;
}
