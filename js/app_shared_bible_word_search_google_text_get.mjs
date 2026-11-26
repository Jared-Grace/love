import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_word_search_google_text_get() {
  "What the button that looks a Bible word up on Google says, in the language the reader of this app reads.";
  let texts = {
    eng: "🔍 Search Google",
    urd: "🔍 گوگل پر تلاش کریں",
    tgl: "🔍 Maghanap sa Google",
    spa: "🔍 Buscar en Google",
    por: "🔍 Pesquisar no Google",
    ind: "🔍 Cari di Google",
    fra: "🔍 Rechercher sur Google",
    translated_from: {
      urd: "🔍 Search Google",
      tgl: "🔍 Search Google",
      spa: "🔍 Search Google",
      por: "🔍 Search Google",
      ind: "🔍 Search Google",
      fra: "🔍 Search Google",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
