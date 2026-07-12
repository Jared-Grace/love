import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
