import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { each } from "./each.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_code_open } from "./app_shared_bible_code_open.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_ref_chapters_guard(
  content,
  ref_chapters,
  books_en,
) {
  let message =
    "This reading spans more than one chapter — which would you like to open?";
  html_p_text_centered(content, message);
  let row = html_div(content);
  html_centered(row);
  function add_button(chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let book_name = ebible_book_code_to_name(books_en, book_code);
    let chapter_name = ebible_chapter_code_to_name(chapter_code);
    let label = text_combine_multiple([book_name, " ", chapter_name]);
    function open() {
      app_shared_bible_code_open(chapter_code);
    }
    app_shared_button(row, label, open);
  }
  each(ref_chapters, add_button);
}
