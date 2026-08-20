import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_free_all_text() {
  "What the button that gives back the space every saved bible is using says, in the language the reader of this app reads.";
  let texts = {
    en: "Free the space all of them use",
    ur: "ان سب کی جگہ خالی کریں",
    translated_from: {
      ur: "Free the space all of them use",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
