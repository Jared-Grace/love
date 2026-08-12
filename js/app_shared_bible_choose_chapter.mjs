import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_code_open } from "./app_shared_bible_code_open.mjs";
import { app_shared_bible_books_choose } from "./app_shared_bible_books_choose.mjs";
export async function app_shared_bible_choose_chapter(
  bar,
  content,
  book_code,
  books,
  folder,
) {
  "the whole-chapter reader's chapter picker: what it shows when the url names a book and no chapter yet, drawn in place rather than as its own screen, and otherwise the same carded numbers the verse reader shows";
  let book_name = ebible_book_code_to_name(books, book_code);
  function on_book() {
    app_shared_bible_books_choose(content, books, book_code);
  }
  app_shared_button(bar, book_name, on_book);
  ("no chapter is marked as current here, and truthfully so: this view is reached by clearing the chapter out of the url, so at this moment there is no chapter being read");
  let current_chapter_code = "";
  await app_shared_bible_chapters_card(
    content,
    book_name,
    folder,
    book_code,
    app_shared_bible_code_open,
    current_chapter_code,
  );
}
