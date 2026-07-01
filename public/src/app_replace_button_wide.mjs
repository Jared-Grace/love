import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
export function app_replace_button_wide(parent, text, lambda) {
  let b = app_replace_button(parent, text, lambda);
  html_width_full(b);
  return b;
}
