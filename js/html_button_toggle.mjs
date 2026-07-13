import { app_replace_button } from "./app_replace_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
export function html_button_toggle(parent, text, on, lambda) {
  let button = app_replace_button(parent, text, lambda);
  app_shared_button_toggle_style(on, button);
  return button;
}
