import { html_button } from "./html_button.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
export function html_button_copy(root, lambda) {
  let t = html_button_copy_text();
  let component = html_button(root, t, lambda);
  return component;
}
