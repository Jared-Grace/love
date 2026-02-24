import { ebible_version_books_original_check } from "../../../love/public/src/ebible_version_books_original_check.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_version_books_upload_name } from "../../../love/public/src/ebible_version_books_upload_name.mjs";
export async function ebible_version_books_browser(bible_folder) {
  let result = await ebible_version_books_original_check(bible_folder);
  if (null_not_is(result)) {
    return result;
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
