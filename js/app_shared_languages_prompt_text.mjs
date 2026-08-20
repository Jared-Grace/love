import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_languages_prompt_text() {
  "What the list of languages asks the reader, in the language the reader of this app reads.";
  let texts = {
    en: "What language or languages you want the Bible verses to be translated into?",
    ur: "آپ بائبل کی آیات کا ترجمہ کن زبان یا زبانوں میں چاہتے ہیں؟",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
