import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function html_button_wide(root, text, lambda) {
  let component = html_button(root, text, lambda);
  html_width_full(component);
  return component;
}
