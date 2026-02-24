import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { ebible_version_books_original_check } from "../../../love/public/src/ebible_version_books_original_check.mjs";
import { ebible_class_apocrypha } from "../../../love/public/src/ebible_class_apocrypha.mjs";
import { ebible_version_books_testament } from "../../../love/public/src/ebible_version_books_testament.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { ebible_class_old } from "../../../love/public/src/ebible_class_old.mjs";
import { ebible_class_new } from "../../../love/public/src/ebible_class_new.mjs";
export async function ebible_version_books(bible_folder) {
  let result = await ebible_version_books_original_check(bible_folder);
  if (null_not_is(result)) {
    return result;
  }
  const n = ebible_class_new();
  let o = ebible_class_old();
  let a = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, a, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
