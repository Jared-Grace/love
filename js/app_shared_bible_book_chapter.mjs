import { app_shared_button } from "./app_shared_button.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_shared_bible_hash_verse_numbers } from "./app_shared_bible_hash_verse_numbers.mjs";
import { app_shared_bible_books_choose } from "./app_shared_bible_books_choose.mjs";
import { app_shared_bible_book_open } from "./app_shared_bible_book_open.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
export function app_shared_bible_book_chapter(
  bar,
  content,
  chapter_code,
  books,
) {
  "the two words in the reading bar that say where you are - the book and the chapter - each of which opens the picker for itself when pressed";
  "the book picker is told what to call its way out, because from here there is a chapter to go back to and it can be named. the link is where the picked verses are read from rather than anything passed in: the picker is drawn over the reading without touching the link, so what it says is still what is picked underneath.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = ebible_book_code_to_name(books, book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let hash = html_hash_object_get();
  let verse_numbers = app_shared_bible_hash_verse_numbers(hash);
  let destination = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  function on_book() {
    app_shared_bible_books_choose(content, books, book_code, destination);
  }
  function on_chapter() {
    app_shared_bible_book_open(book_code);
  }
  app_shared_button(bar, book_name, on_book);
  app_shared_button(bar, chapter_name, on_chapter);
}
