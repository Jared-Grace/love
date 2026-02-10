import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { html_parse_find_list_href_text } from "../../../love/public/src/html_parse_find_list_href_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_parse_read } from "../../../love/public/src/html_parse_read.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_version_books_testament(bible_folder, selector) {
  let file_path = await ebible_version_download(bible_folder);
  let joined = path_join([file_path, "index.htm"]);
  let { d, root } = await html_parse_read(joined);
  let bl = html_parse_find(root, ".bookList");
  let mapped = html_parse_find_list_href_text(bl, selector, d);
  function lambda(item) {
    let href = property_get(item, "href");
    let taken = ebible_chapter_code_to_book(href);
    let to = object_merge(
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
