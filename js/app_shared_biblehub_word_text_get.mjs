import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_biblehub_word_text_get() {
  "What the button that opens a Bible word on BibleHub says, in the language the reader of this app reads.";
  let texts = {
    en: "Open word in BibleHub",
    ur: "BibleHub پر لفظ کھولیں",
    tgl: "Buksan ang salita sa BibleHub",
    translated_from: {
      ur: "Open word in BibleHub",
      tgl: "Open word in BibleHub",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
