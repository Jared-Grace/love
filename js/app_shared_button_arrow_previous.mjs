import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { emoji_arrow_left } from "../../love/js/emoji_arrow_left.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
export function app_shared_button_arrow_previous(parent, unit, lambda) {
  let text = text_combine_multiple([emoji_arrow_left(), " Previous ", unit]);
  let component = app_shared_button(parent, text, lambda);
  return component;
}
