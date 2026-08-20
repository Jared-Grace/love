import { app_shared_bible_offline_arrow_text } from "./app_shared_bible_offline_arrow_text.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_text() {
  "What the way into keeping the bible on the device is called, in the language the reader of this app reads.";
  let texts = {
    en: " Download for offline",
    ur: " آف لائن کے لیے ڈاؤن لوڈ کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let text = app_shared_bible_offline_arrow_text(label);
  return text;
}
