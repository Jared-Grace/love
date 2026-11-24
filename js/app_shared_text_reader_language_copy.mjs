import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_copy } from "./emoji_copy.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_text_reader_language_copy(texts) {
  "what a button that takes a copy says: the wording for the language the reader of this app reads, with the little clipboard in front of it";
  let label = app_shared_text_reader_language(texts);
  let left = emoji_copy();
  let c = text_combine(left, label);
  return c;
}
