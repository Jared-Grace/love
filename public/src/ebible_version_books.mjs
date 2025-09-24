import { browser_is } from "./browser_is.mjs";
import { ebible_class_apocrypha } from "./ebible_class_apocrypha.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { ebible_class_old } from "./ebible_class_old.mjs";
import { ebible_class_new } from "./ebible_class_new.mjs";
export async function ebible_version_books(bible_folder) {
  let b = browser_is();
  if (b) {
  }
  const n = ebible_class_new();
  let o = ebible_class_old();
  let v = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, v, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
