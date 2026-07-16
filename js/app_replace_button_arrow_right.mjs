import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { emoji_arrow_right } from "../../love/js/emoji_arrow_right.mjs";
export function app_replace_button_arrow_right(parent, lambda) {
  let text = emoji_arrow_right();
  let component = app_shared_button(parent, text, lambda);
  return component;
}
