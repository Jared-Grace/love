import { ebible_offline_books_get } from "./ebible_offline_books_get.mjs";
import { ebible_version_books_original_check } from "./ebible_version_books_original_check.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_books_upload_name } from "./ebible_version_books_upload_name.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { equal } from "./equal.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
export async function ebible_version_books_browser(bible_folder) {
  let result = await ebible_version_books_original_check(bible_folder);
  if (null_not_is(result)) {
    return result;
  }
  let right = ebible_folder_english();
  let is_english = equal(bible_folder, right);
  if (is_english) {
    let baked = ebible_books_engbsb();
    return baked;
  }
  let offline = await ebible_offline_books_get(bible_folder);
  if (null_not_is(offline)) {
    return offline;
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
