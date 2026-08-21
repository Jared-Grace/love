import { app_shared_screen_asking_is } from "./app_shared_screen_asking_is.mjs";
import { app_code_hash_write } from "./app_code_hash_write.mjs";
import { app_shared_footer_context } from "./app_shared_footer_context.mjs";
export function app_code_after_refresh(context) {
  "runs after each screen draws: keep the url in step with where you are, and end the page with its footer (re-added every render because navigating clears the page).";
  "a screen that asks before doing something offers two answers and nothing else, so it is the one screen this app does not end with the footer";
  app_code_hash_write(context);
  let asking = app_shared_screen_asking_is(context);
  if (asking) {
    return;
  }
  app_shared_footer_context(context);
}
