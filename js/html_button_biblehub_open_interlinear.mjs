import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
export function html_button_biblehub_open_interlinear(
  parent,
  chapter_name,
  book_name,
  verse_number,
) {
  "the way out to the verse with its original words set under the English ones, named in the language the reader of this app reads";
  "the page it opens is in English, and the button still says what it is for in the reader's own language. what a reader is deciding at the moment they look at a button is whether to go, and they cannot decide that in a language they are only here to start learning.";
  let texts = {
    en: "Interlinear",
    ur: "لفظ بہ لفظ",
  };
  let text = app_shared_text_reader_language(texts);
  html_button_biblehub_open(
    parent,
    book_name,
    chapter_name,
    verse_number,
    text,
    "interlinear/",
    "",
  );
}
