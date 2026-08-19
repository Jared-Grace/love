import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { door43_version_chapter_codes } from "./door43_version_chapter_codes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  ("The name of every chapter one bible carries, whichever of the two places the bible came from.");
  ("A bible from the Door43 catalogue has no book index page to read, because its books are files and its chapters are marks inside them. So its chapters are read off the chapters themselves next door.");
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    let carried = await door43_version_chapter_codes(bible_folder);
    return carried;
  }
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
