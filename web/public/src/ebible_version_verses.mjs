import { ebible_version_download } from "./ebible_version_download.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_class_old } from "./ebible_class_old.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { ebible_class_new } from "./ebible_class_new.mjs";
import { marker } from "./marker.mjs";
import { folder_read } from "./folder_read.mjs";
export async function ebible_version_verses(bible_folder) {
  let file_path = await ebible_version_download(bible_folder);
  let files = folder_read(file_path);
  const n = ebible_class_new();
  let o = ebible_class_old();
  let classes = list_join_comma_space([o, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  marker("1");
  let first = list_first(books);
  let book_code = object_property_get(first, "book_code");
  let chapters_name = book_code + ".htm";
  return chapters_name;
}
