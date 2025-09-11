import { list_first } from "./list_first.mjs";
import { ebible_class_old } from "./ebible_class_old.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { ebible_class_new } from "./ebible_class_new.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  const n = ebible_class_new();
  let o = ebible_class_old();
  let classes = list_join_comma_space([o, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  marker("1");
  let first = list_first(list);
  return books;
}
