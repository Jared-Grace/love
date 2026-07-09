import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_shared_button_back_text() {
  let bt = text_combine(emoji_arrow_left(), " Back");
  return bt;
}
