import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
export function app_a_button_wide(parent, text, lambda) {
  let component = app_a_button(parent, text, lambda);
  html_width_full(component);
  return component;
}
