import { app_replace_button } from "./app_replace_button.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
export function app_replace_button_arrow_left(parent, lambda) {
  let text = emoji_arrow_left();
  let component = app_replace_button(parent, text, lambda);
  return component;
}
