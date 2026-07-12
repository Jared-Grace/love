import { emoji_home } from "./emoji_home.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_button_home_text() {
  let r = text_combine(emoji_home(), " Home");
  return r;
}
