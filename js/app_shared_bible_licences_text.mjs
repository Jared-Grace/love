import { emoji_books } from "./emoji_books.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_licences_text() {
  "What the way into the credits is called - said as what the reader will find rather than as the word licences, which is the name of the paperwork and not of the people.";
  let texts = {
    en: " The bibles here, and who gave them",
    ur: " یہاں کی بائبلیں، اور کن لوگوں نے دیں",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_books();
  let text = text_combine(left, label);
  return text;
}
