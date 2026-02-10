import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_language_original_code } from "../../../love/public/src/ebible_language_original_code.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { ebible_version_books_upload_name } from "../../../love/public/src/ebible_version_books_upload_name.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { ebible_class_apocrypha } from "../../../love/public/src/ebible_class_apocrypha.mjs";
import { ebible_version_books_testament } from "../../../love/public/src/ebible_version_books_testament.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { ebible_class_old } from "../../../love/public/src/ebible_class_old.mjs";
import { ebible_class_new } from "../../../love/public/src/ebible_class_new.mjs";
export async function ebible_version_books(bible_folder) {
  let right = ebible_language_original_code();
  if (equal(bible_folder, right)) {
    let bible_folder2 = ebible_folder_english();
    let r = await ebible_version_books(bible_folder2);
    return r;
  }
  let b = browser_is();
  if (b) {
    let file_name = ebible_version_books_upload_name();
    let v = await firebase_storage_download_ebible_cache(
      ebible_version_books,
      bible_folder,
      file_name,
    );
    let books = property_get(v, "books");
    return books;
  }
  const n = ebible_class_new();
  let o = ebible_class_old();
  let a = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, a, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
