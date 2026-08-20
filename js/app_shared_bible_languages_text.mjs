import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_languages_text() {
  "inside settings the gear already belongs to settings itself, so the languages entry wears a globe instead";
  let texts = {
    en: " Choose languages",
    ur: " زبانیں منتخب کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_globe_americas();
  let text = text_combine(left, label);
  return text;
}
