import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_button_back_text() {
  let bt = text_combine(emoji_arrow_left(), " Back");
  return bt;
}
