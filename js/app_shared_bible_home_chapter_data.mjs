import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_books_verses_fetch } from "./app_shared_bible_books_verses_fetch.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
export async function app_shared_bible_home_chapter_data(chapter_code) {
  arguments_assert(arguments, 1);
  let v = ebible_chapter_code_parse(chapter_code);
  let chapter_name = property_get(v, "chapter_name");
  let book_code = property_get(v, "book_code");
  let r = await app_shared_bible_books_verses_fetch(chapter_code);
  let verses = property_get(r, "verses");
  let books = property_get(r, "books");
  let book_name = ebible_book_code_to_name(books, book_code);
  let r2 = {
    chapter_name,
    verses,
    books,
    book_name,
  };
  return r2;
}
