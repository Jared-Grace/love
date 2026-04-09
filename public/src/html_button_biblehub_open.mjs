import { html_button } from "../../../love/public/src/html_button.mjs";
import { window_open } from "../../../love/public/src/window_open.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { text_replace_space_underscore_lower } from "../../../love/public/src/text_replace_space_underscore_lower.mjs";
export function html_button_biblehub_open(
  folder,
  ending,
  verse_number_v,
  bottom,
  button_text,
  book_name,
  chapter_name,
) {
  function lambda10() {
    let replaced = text_replace_space_underscore_lower(book_name);
    if (equal(replaced, "song")) {
      replaced = "songs";
    }
    window_open(
      "https://biblehub.com/" +
        folder +
        replaced +
        "/" +
        chapter_name +
        "-" +
        verse_number_v +
        ".htm" +
        ending,
    );
  }
  let component5 = html_button(bottom, button_text, lambda10);
  return component5;
}
