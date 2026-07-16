import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { app_shared_button_next_text } from "../../love/js/app_shared_button_next_text.mjs";
export function app_replace_button_wide_next(parent, on_next) {
  let nt = app_shared_button_next_text();
  let bn = app_shared_button_wide(parent, nt, on_next);
  return bn;
}
