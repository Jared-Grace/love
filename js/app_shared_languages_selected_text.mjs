import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_languages_selected_text() {
  "what heads the list of chosen languages while there is only one, so there is nothing to put in order, in the language the reader of this app reads";
  let texts = {
    eng: "Selected languages:",
    urd: "چنی ہوئی زبانیں:",
    tgl: "Mga napiling wika:",
    spa: "Idiomas elegidos:",
    por: "Idiomas escolhidos:",
    translated_from: {
      urd: "Selected languages:",
      tgl: "Selected languages:",
      spa: "Selected languages:",
      por: "Selected languages:",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
