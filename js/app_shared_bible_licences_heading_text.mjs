import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_heading_text() {
  "What stands at the top of the credits, in the language the reader of this app reads.";
  let texts = {
    en: "The bibles in this app, and who gave them",
    ur: "اس ایپ کی بائبلیں، اور کن لوگوں نے دیں",
    translated_from: {
      ur: "The bibles in this app, and who gave them",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
