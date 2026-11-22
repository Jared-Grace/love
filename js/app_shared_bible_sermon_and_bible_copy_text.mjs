import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_copy } from "./emoji_copy.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_sermon_and_bible_copy_text() {
  "what the button that copies the passage and its sermon together says, in the language the reader of this app reads, with the little clipboard in front of it";
  let texts = {
    en: " Copy Bible and sermon",
    ur: " بائبل اور واعظ کاپی کریں",
    tgl: " Kopyahin ang Bibliya at sermon",
    translated_from: {
      ur: " Copy Bible and sermon",
      tgl: " Copy Bible and sermon",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_copy();
  let c = text_combine(left, label);
  return c;
}
