import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_link } from "./emoji_link.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_button_share_text() {
  "what the button that hands something on to somebody else says, in the language the reader of this app reads, with the little chain link in front of it";
  let texts = {
    en: " Share",
    ur: " شیئر کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_link();
  let c = text_combine(left, label);
  return c;
}
