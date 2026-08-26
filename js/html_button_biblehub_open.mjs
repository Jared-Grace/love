import { app_shared_button } from "./app_shared_button.mjs";
import { window_open } from "./window_open.mjs";
import { equal } from "./equal.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_button_biblehub_open(
  parent,
  book_name,
  chapter_name,
  verse_number,
  button_text,
  folder,
  ending,
) {
  function lambda() {
    let replaced = text_replace_space_underscore_lower(book_name);
    if (equal(replaced, "song")) {
      replaced = "songs";
    }
    let url = text_combine_multiple([
      "https://biblehub.com/",
      folder,
      replaced,
      "/",
      chapter_name,
      "-",
      verse_number,
      ".htm",
      ending,
    ]);
    window_open(url);
  }
  let b = app_shared_button(parent, button_text, lambda);
  return b;
}
