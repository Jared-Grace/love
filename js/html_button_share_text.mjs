import { emoji_link } from "./emoji_link.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_button_share_text() {
  let c = text_combine(emoji_link(), " Share");
  return c;
}
