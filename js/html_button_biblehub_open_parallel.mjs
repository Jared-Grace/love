import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
export function html_button_biblehub_open_parallel(
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
    "Parallel",
    "",
    "",
  );
}
