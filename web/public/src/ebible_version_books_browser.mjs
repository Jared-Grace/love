import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_language_original_code } from "../../../love/public/src/ebible_language_original_code.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { ebible_version_books_upload_name } from "../../../love/public/src/ebible_version_books_upload_name.mjs";
export async function ebible_version_books_browser(bible_folder) {
  let result = null;
  let right = ebible_language_original_code();
  if (equal(bible_folder, right)) {
    let bible_folder2 = ebible_folder_english();
    result = await ebible_version_books_browser(bible_folder2);
    return result;
  }
  if (null_not_is(value)) {
  }
  let file_name = ebible_version_books_upload_name();
  let v = await firebase_storage_download_ebible_cache(
    ebible_version_books_browser,
    bible_folder,
    file_name,
  );
  let books = property_get(v, "books");
  return books;
}
