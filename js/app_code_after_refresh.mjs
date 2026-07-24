import { app_code_hash_write } from "./app_code_hash_write.mjs";
import { app_shared_contact_button_context } from "./app_shared_contact_button_context.mjs";
export function app_code_after_refresh(context) {
  "runs after each screen draws: keep the url in step with where you are, and offer a way to reach the developer (re-added every render because navigating clears the page).";
  app_code_hash_write(context);
  app_shared_contact_button_context(context);
}
