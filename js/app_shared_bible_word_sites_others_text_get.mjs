import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_word_sites_others_text_get() {
  "What the quiet label above the articles on sites the reader has not chosen yet says, in the language the reader of this app reads.";
  let texts = {
    en: "Others:",
    ur: "دیگر:",
    tgl: "Iba pa:",
    translated_from: {
      ur: "Others:",
      tgl: "Others:",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
