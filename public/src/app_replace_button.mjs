import { app_replace_button_style } from "../../../love/public/src/app_replace_button_style.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_replace_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_replace_button_style(b);
  return b;
}
