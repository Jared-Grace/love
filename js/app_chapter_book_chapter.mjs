import { app_replace_button } from "./app_replace_button.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_chapter_books_choose } from "./app_chapter_books_choose.mjs";
import { app_chapter_book_open } from "./app_chapter_book_open.mjs";
export function app_chapter_book_chapter(bar, content, chapter_code, books) {
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = ebible_book_code_to_name(books, book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  function on_book() {
    app_chapter_books_choose(content, books);
  }
  function on_chapter() {
    app_chapter_book_open(book_code);
  }
  app_replace_button(bar, book_name, on_book);
  app_replace_button(bar, chapter_name, on_chapter);
}
