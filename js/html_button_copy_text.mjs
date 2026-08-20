import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_copy } from "./emoji_copy.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_button_copy_text() {
  "what the button that takes a copy of something says, in the language the reader of this app reads, with the little clipboard in front of it";
  let texts = {
    en: " Copy",
    ur: " کاپی کریں",
    translated_from: {
      ur: " Copy",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_copy();
  let c = text_combine(left, label);
  return c;
}
