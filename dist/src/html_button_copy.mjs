import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
export function html_button_copy(root, lambda12) {
  let t = html_button_copy_text();
  let component = html_button(root, t, lambda12);
  return component;
}
