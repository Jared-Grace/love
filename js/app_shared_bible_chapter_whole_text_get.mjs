import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_chapter_whole_text_get() {
  "What the button out of one verse into the whole chapter around it says, in the language the reader of this app reads.";
  "The whole saying per language, and the open book put in front of it afterwards. Urdu bends the word for whole to the thing it describes - a chapter takes one form and a verse takes another - so the pair of sayings here differ in both their words, which is exactly what a phrase assembled from a word for whole and a word for chapter could not do.";
  let texts = {
    en: "Whole chapter",
    ur: "پورا باب",
  };
  let label = app_shared_text_reader_language(texts);
  let book = emoji_book_open();
  let spaced = text_combine(book, " ");
  let text = text_combine(spaced, label);
  return text;
}
