import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_word_sites_recent_text_get() {
  "What the quiet label above the articles on sites the reader has chosen before says, in the language the reader of this app reads.";
  let texts = {
    eng: "Recent:",
    urd: "حالیہ:",
    tgl: "Kamakailan:",
    spa: "Recientes:",
    por: "Recentes:",
    ind: "Terbaru:",
    fra: "Récents :",
    translated_from: {
      urd: "Recent:",
      tgl: "Recent:",
      spa: "Recent:",
      por: "Recent:",
      ind: "Recent:",
      fra: "Recent:",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
