import { global_function_initialize_lambda_async } from "../../../love/public/src/global_function_initialize_lambda_async.mjs";
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
  marker("1");
  let b = browser_is();
  if (b) {
    async function lambda2() {}
    let value = await global_function_initialize_lambda_async(fn, lambda2);
    let file_name2 = ebible_version_books_upload_name();
    let { books } = await firebase_storage_download_ebible(
      bible_folder,
      file_name2,
    );
    return books;
  }
  const n = ebible_class_new();
  let o = ebible_class_old();
  let a = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, a, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
