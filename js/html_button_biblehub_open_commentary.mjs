import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
export function html_button_biblehub_open_commentary(
  parent,
  chapter_name,
  book_name,
  verse_number,
) {
  "the way out to what the commentators said about the verse, named in the language the reader of this app reads";
  "its neighbour the interlinear says why the button is in the reader's language while the page it opens is in English";
  let texts = { en: "Commentary", ur: "تفسیر" };
  let text = app_shared_text_reader_language(texts);
  html_button_biblehub_open(
    parent,
    book_name,
    chapter_name,
    verse_number,
    text,
    "",
    "#commentary",
  );
}
