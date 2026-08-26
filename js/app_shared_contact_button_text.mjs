import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_contact_button_text() {
  "what the way to reach the developer says, in the language the reader of this app reads. The little picture in front of it is chosen where the button is made, because a picture is the same in every language and these words are not.";
  let texts = {
    en: " Contact the developer",
    ur: " ڈویلپر سے رابطہ کریں",
    translated_from: {
      ur: " Contact the developer",
    },
  };
  let label = app_shared_text_reader_language(texts);
  return label;
}
