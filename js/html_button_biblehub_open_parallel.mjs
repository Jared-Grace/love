import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
export function html_button_biblehub_open_parallel(
  parent,
  chapter_name,
  book_name,
  verse_number,
) {
  "the way out to the verse as the other English translations put it, side by side, named in the language the reader of this app reads";
  "its neighbour the interlinear says why the button is in the reader's language while the page it opens is in English";
  let texts = {
    en: "Parallel",
    ur: "متوازی تراجم",
  };
  let text = app_shared_text_reader_language(texts);
  html_button_biblehub_open(
    parent,
    book_name,
    chapter_name,
    verse_number,
    text,
    "",
    "",
  );
}
