import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
export function app_replace_button_wide(root, name2, lambda) {
  let b = app_replace_button(root, name2, lambda);
  html_width_full(b);
}
