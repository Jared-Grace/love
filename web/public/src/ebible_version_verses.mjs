import { html_parse_href_text_map } from "./html_parse_href_text_map.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { path_join } from "./path_join.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let books = await ebible_version_books(bible_folder);
  marker("1");
  let first = list_first(books);
  let book_code = object_property_get(first, "book_code");
  let chapters_name = book_code + ".htm";
  let joined = path_join([file_path, chapters_name]);
  let { d, root } = await html_parse_read(joined);
  let list = html_parse_find_list_to(root, "a");
  let mapped = html_parse_href_text_map(d, list);
  return mapped;
}
