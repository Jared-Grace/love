import { app_replace_button } from "./app_replace_button.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
export function app_replace_button_arrow_right(parent, lambda) {
  let text = emoji_arrow_right();
  let component = app_replace_button(parent, text, lambda);
  return component;
}
