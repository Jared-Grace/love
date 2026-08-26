import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_all_apps_button_text() {
  "what the way back out to the page listing every app says, in the language the reader of this app reads. The little picture in front of it is chosen where the button is made, because a picture is the same in every language and these words are not.";
  let texts = {
    en: " All apps",
    ur: " تمام ایپس",
    translated_from: {
      ur: " All apps",
    },
  };
  let label = app_shared_text_reader_language(texts);
  return label;
}
