import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { ebible_language_original_code } from "../../../love/public/src/ebible_language_original_code.mjs";
export async function ebible_version_books_original_check(bible_folder) {
  let result = null;
  let right = ebible_language_original_code();
  if (equal(bible_folder, right)) {
    let bible_folder2 = ebible_folder_english();
    result = await ebible_version_books_browser(bible_folder2);
  }
  return result;
}
