import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { html_parse_find_list_href_text } from "./html_parse_find_list_href_text.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_version_books_testament(bible_folder, selector) {
  let file_path = await ebible_version_download(bible_folder);
  let joined = path_join([file_path, "index.htm"]);
  let r = await html_parse_read(joined);
  let root = property_get(r, "root");
  let d = property_get(r, "d");
  let bl = html_parse_find(root, ".bookList");
  let mapped = html_parse_find_list_href_text(bl, selector, d);
  function lambda(item) {
    let href = property_get(item, "href");
    let taken = ebible_chapter_code_to_book(href);
    let to = object_merge_set(
      {
        book_code: taken,
      },
      item,
    );
    return to;
  }
  let mapped2 = list_map(mapped, lambda);
  return mapped2;
}
