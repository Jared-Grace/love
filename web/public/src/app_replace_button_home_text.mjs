import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_replace_button_home_text() {
  let r = text_combine(emoji_home(), " Home");
  return r;
}
