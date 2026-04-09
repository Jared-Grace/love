import { html_button_biblehub_open } from "../../../love/public/src/html_button_biblehub_open.mjs";
export function html_button_biblehub_open_commentary(
  parent,
  chapter_name,
  book_name,
  verse_number,
) {
  html_button_biblehub_open(
    parent,
    book_name,
    chapter_name,
    verse_number,
    "Commentary",
    "",
    "#commentary",
  );
}
