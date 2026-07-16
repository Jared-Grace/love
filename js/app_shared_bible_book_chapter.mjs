import { app_replace_button } from "../../love/js/app_replace_button.mjs";
import { ebible_chapter_code_to_book } from "../../love/js/ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "../../love/js/ebible_chapter_code_to_name.mjs";
import { ebible_book_code_to_name } from "../../love/js/ebible_book_code_to_name.mjs";
import { app_shared_bible_books_choose } from "../../love/js/app_shared_bible_books_choose.mjs";
import { app_shared_bible_book_open } from "../../love/js/app_shared_bible_book_open.mjs";
export function app_shared_bible_book_chapter(
  bar,
  content,
  chapter_code,
  books,
) {
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = ebible_book_code_to_name(books, book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  function on_book() {
    app_shared_bible_books_choose(content, books);
  }
  function on_chapter() {
    app_shared_bible_book_open(book_code);
  }
  app_replace_button(bar, book_name, on_book);
  app_replace_button(bar, chapter_name, on_chapter);
}
