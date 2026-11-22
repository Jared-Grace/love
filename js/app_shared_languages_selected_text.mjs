import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_languages_selected_text() {
  "what heads the list of chosen languages while there is only one, so there is nothing to put in order, in the language the reader of this app reads";
  let texts = {
    en: "Selected languages:",
    ur: "چنی ہوئی زبانیں:",
    tgl: "Mga napiling wika:",
    translated_from: {
      ur: "Selected languages:",
      tgl: "Selected languages:",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
