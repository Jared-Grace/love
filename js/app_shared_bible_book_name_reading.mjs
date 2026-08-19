import { app_shared_bible_folder_reading } from "./app_shared_bible_folder_reading.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_book_name_reading(
  book_code,
  book_name_english,
) {
  "What a book is called in the language the reading is in - Juan where the verses say Juan, rather than John over a Tagalog chapter.";
  "The English name is asked for rather than fetched again, because every caller of this is a screen that already has it. It is also the answer when the bible being read has no such book: a translation that stops at the gospels still has to name a book somewhere on the way to being told it is not there, and a blank where a name goes reads as the page being broken.";
  arguments_assert(arguments, 2);
  let folder = app_shared_bible_folder_reading();
  let books = await ebible_version_books_browser(folder);
  let found = list_find_property_or_null(books, "book_code", book_code);
  let missing = null_is(found);
  if (missing) {
    return book_name_english;
  }
  let book_name = property_get(found, "text");
  return book_name;
}
