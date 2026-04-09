import { html_button_biblehub_open } from "../../../love/public/src/html_button_biblehub_open.mjs";
export function html_button_biblehub_open_parallel(
  parent,
  book_name,
  chapter_name,
  verse_number,
) {
  html_button_biblehub_open(
    chapter_name,
    verse_number,
    "Parallel",
    "",
    "",
    parent,
    book_name,
  );
}
