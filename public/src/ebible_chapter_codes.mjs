import { ebible_chapter_codes_browser } from "../../../love/public/src/ebible_chapter_codes_browser.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_books_to_chapter_codes } from "../../../love/public/src/ebible_books_to_chapter_codes.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_chapter_codes(bible_folder) {
  arguments_assert(arguments, 1);
  let b = browser_is();
  if (b) {
    let r = await ebible_chapter_codes_browser(bible_folder);
    return r;
  }
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  return chapter_codes;
}
