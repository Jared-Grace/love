import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_button_toggle_style } from "../../love/js/app_shared_button_toggle_style.mjs";
export function html_button_toggle(parent, text, on, lambda) {
  let button = app_shared_button(parent, text, lambda);
  app_shared_button_toggle_style(on, button);
  return button;
}
