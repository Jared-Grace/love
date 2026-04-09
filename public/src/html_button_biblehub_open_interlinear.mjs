import { html_button_biblehub_open } from "../../../love/public/src/html_button_biblehub_open.mjs";
export function html_button_biblehub_open_interlinear(
  verse_number,
  bottom,
  book_name,
  chapter_name,
) {
  html_button_biblehub_open(
    chapter_name,
    verse_number,
    "Interlinear",
    "interlinear/",
    "",
    bottom,
    book_name,
  );
}
