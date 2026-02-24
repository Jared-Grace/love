import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
export async function ebible_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  let books = await ebible_version_books_browser(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
