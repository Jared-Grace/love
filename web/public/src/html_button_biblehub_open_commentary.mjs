import { html_button_biblehub_open } from "../../../love/public/src/html_button_biblehub_open.mjs";
export function html_button_biblehub_open_commentary(
  verse_number,
  bottom,
  book_name,
  chapter_name,
) {
  html_button_biblehub_open(
    chapter_name,
    verse_number,
    "Commentary",
    "",
    "#commentary",
    bottom,
    book_name,
  );
}
