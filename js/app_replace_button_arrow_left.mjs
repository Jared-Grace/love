import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { emoji_arrow_left } from "../../love/js/emoji_arrow_left.mjs";
export function app_replace_button_arrow_left(parent, lambda) {
  let text = emoji_arrow_left();
  let component = app_shared_button(parent, text, lambda);
  return component;
}
