import { emoji_copy } from "../../../love/public/src/emoji_copy.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function html_button_copy_text() {
  let c = text_combine(emoji_copy(), " Copy");
  return c;
}
