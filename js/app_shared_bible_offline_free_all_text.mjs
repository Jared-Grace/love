import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_free_all_text() {
  "What the button that gives back the space every saved bible is using says, in the language the reader of this app reads.";
  let texts = {
    eng: "Free the space all of them use",
    urd: "ان سب کی جگہ خالی کریں",
    tgl: "Bakantehin ang espasyong ginagamit nilang lahat",
    spa: "Liberar el espacio que usan todos",
    por: "Liberar o espaço que todos usam",
    translated_from: {
      urd: "Free the space all of them use",
      tgl: "Free the space all of them use",
      spa: "Free the space all of them use",
      por: "Free the space all of them use",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
