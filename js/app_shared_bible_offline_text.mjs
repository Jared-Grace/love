import { app_shared_bible_offline_arrow_text } from "./app_shared_bible_offline_arrow_text.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_text() {
  "What the way into keeping the bible on the device is called, in the language the reader of this app reads.";
  let texts = {
    eng: " Download for offline",
    urd: " آف لائن کے لیے ڈاؤن لوڈ کریں",
    tgl: " I-download para magamit nang offline",
    spa: " Descargar para usar sin conexión",
    por: " Baixar para usar sem internet",
    ind: " Unduh untuk dipakai tanpa internet",
    translated_from: {
      urd: " Download for offline",
      tgl: " Download for offline",
      spa: " Download for offline",
      por: " Download for offline",
      ind: " Download for offline",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let text = app_shared_bible_offline_arrow_text(label);
  return text;
}
