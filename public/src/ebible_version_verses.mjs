import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { marker } from "./marker.mjs";
import { folder_read } from "./folder_read.mjs";
export async function ebible_version_verses(bible_folder) {
  let file_path = await ebible_version_download(bible_folder);
  let files = folder_read(file_path);
  let books = await ebible_version_books(bible_folder);
  marker("1");
  let first = list_first(books);
  let book_code = object_property_get(first, "book_code");
  let chapters_name = book_code + ".htm";
  let joined = path_join([file_path, chapters_name]);
  let { d, root } = await html_parse_read(joined);
  let result = html_parse_find_list_to(root, "a");
  return joined;
}
