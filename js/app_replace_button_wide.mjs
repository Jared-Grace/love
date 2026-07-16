import { html_width_full } from "../../love/js/html_width_full.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
export function app_replace_button_wide(parent, text, lambda) {
  let b = app_shared_button(parent, text, lambda);
  html_width_full(b);
  return b;
}
