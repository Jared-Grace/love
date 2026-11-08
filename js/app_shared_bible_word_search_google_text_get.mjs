import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_word_search_google_text_get() {
  "What the button that looks a Bible word up on Google says, in the language the reader of this app reads.";
  let texts = {
    en: "🔍 Search Google",
    ur: "🔍 گوگل پر تلاش کریں",
    tgl: "🔍 Maghanap sa Google",
    translated_from: {
      ur: "🔍 Search Google",
      tgl: "🔍 Search Google",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
