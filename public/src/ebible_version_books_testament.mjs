import { html_parse_find_list_href_text } from "./html_parse_find_list_href_text.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_take } from "./string_take.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_parse_read } from "./html_parse_read.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_version_books_testament(bible_folder, selector) {
  let file_path = await ebible_version_download(bible_folder);
  let joined = path_join([file_path, "index.htm"]);
  let { d, root } = await html_parse_read(joined);
  let bl = html_parse_find(root, ".bookList");
  let mapped = html_parse_find_list_href_text(bl, selector, d);
  function lambda(item) {
    let href = object_property_get(item, "href");
    let taken = string_take(href, 3);
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
