import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_text() {
  let text = text_combine(emoji_arrow_down(), " Offline");
  return text;
}
