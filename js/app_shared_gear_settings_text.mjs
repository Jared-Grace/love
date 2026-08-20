import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { app_shared_gear_text } from "./app_shared_gear_text.mjs";
export function app_shared_gear_settings_text() {
  "what the one gear on the reading bar says: the gear itself, and beside it the word for what it opens, in the language the reader of this app reads";
  "the gear is added after the word is chosen rather than written into each language's saying. a picture means the same thing to everybody who sees it, so writing it out once per language would be the same picture copied as many times as there are languages, and the copy that got missed would be the one nobody noticed";
  let texts = {
    en: " Settings",
    ur: " ترتیبات",
  };
  let label = app_shared_text_reader_language(texts);
  let text = app_shared_gear_text(label);
  return text;
}
