import { html_button } from "./html_button.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
export function html_button_arrow_left(parent, lambda) {
  let text = emoji_arrow_left();
  let component = html_button(parent, text, lambda);
  return component;
}
