import { ebible_language_original_code } from "../../../love/public/src/ebible_language_original_code.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_storage_download_ebible } from "../../../love/public/src/firebase_storage_download_ebible.mjs";
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
    let v2 = await ebible_version_books(bible_folder);
    return v2;
  }
  marker("1");
  let b = browser_is();
  if (b) {
    async function lambda2() {
      let file_name2 = ebible_version_books_upload_name();
      let v = await firebase_storage_download_ebible(bible_folder, file_name2);
      let books = object_property_get(v, "books");
      return books;
    }
    let value = await global_function_property_initialize_async(
      ebible_version_books,
      bible_folder,
      lambda2,
    );
    return value;
  }
  const n = ebible_class_new();
  let o = ebible_class_old();
  let a = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, a, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
