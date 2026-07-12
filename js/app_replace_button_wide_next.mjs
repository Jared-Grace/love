import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
export function app_replace_button_wide_next(parent, on_next) {
  let nt = app_shared_button_next_text();
  let bn = app_replace_button_wide(parent, nt, on_next);
}
