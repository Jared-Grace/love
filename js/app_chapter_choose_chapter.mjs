import { ebible_book_code_to_chapter_codes_browser } from "./ebible_book_code_to_chapter_codes_browser.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_replace_button_list_centered } from "./app_replace_button_list_centered.mjs";
import { app_chapter_code_open } from "./app_chapter_code_open.mjs";
import { app_chapter_books_choose } from "./app_chapter_books_choose.mjs";
export async function app_chapter_choose_chapter(bar, content, book_code, books, folder) {
  let book_name = ebible_book_code_to_name(books, book_code);
  function on_book() {
    app_chapter_books_choose(content, books);
  }
  app_replace_button(bar, book_name, on_book);
  let items = await ebible_book_code_to_chapter_codes_browser(folder, book_code);
  app_replace_button_list_centered(
    content,
    items,
    ebible_chapter_code_to_name,
    app_chapter_code_open,
  );
}
