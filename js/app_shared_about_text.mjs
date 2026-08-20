import { emoji_information } from "./emoji_information.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_about_text() {
  "What the way into what this app is standing on is called, in the language the reader of this app reads.";
  let texts = {
    en: " About",
    ur: " تعارف",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_information();
  let text = text_combine(left, label);
  return text;
}
