import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function html_button_width_full(root, text, lambda2) {
  let component = html_button(root, text, lambda2);
  html_width_full(component);
  return component;
}
