import { html_button_biblehub_open } from "../../../love/public/src/html_button_biblehub_open.mjs";
export function html_button_biblehub_open_interlinear(
  verse_number,
  bottom,
  book_name,
  chapter_name,
) {
  html_button_biblehub_open(
    "interlinear/",
    "",
    verse_number,
    bottom,
    "Interlinear",
    book_name,
    chapter_name,
  );
}
