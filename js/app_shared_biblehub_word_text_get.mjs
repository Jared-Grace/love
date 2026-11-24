import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_biblehub_word_text_get() {
  "What the button that opens a Bible word on BibleHub says, in the language the reader of this app reads.";
  let texts = {
    eng: "Open word in BibleHub",
    urd: "BibleHub پر لفظ کھولیں",
    tgl: "Buksan ang salita sa BibleHub",
    spa: "Abrir la palabra en BibleHub",
    por: "Abrir a palavra no BibleHub",
    translated_from: {
      urd: "Open word in BibleHub",
      tgl: "Open word in BibleHub",
      spa: "Open word in BibleHub",
      por: "Open word in BibleHub",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
