import { html_button_widen } from "./html_button_widen.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_button_wide(parent, text, lambda) {
  let b = app_shared_button(parent, text, lambda);
  html_button_widen(b);
  return b;
}
