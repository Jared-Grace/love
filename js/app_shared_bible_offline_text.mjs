import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_text() {
  let left = emoji_arrow_down();
  let text = text_combine(left, " Offline");
  return text;
}
