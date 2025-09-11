import { html_parse_read } from "./html_parse_read.mjs";
import { string_take } from "./string_take.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_list_to } from "./html_parse_list_to.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_version_books_testament(bible_folder, selector) {
  let file_path = await ebible_version_download(bible_folder);
  let joined = path_join([file_path, "index.htm"]);
  let { d, root } = await html_parse_read(joined);
  let bl = html_parse_find(root, ".bookList");
  let query = html_parse_find(bl, selector);
  let list = html_parse_list_to(query);
  function lambda(item) {
    let text = html_parse_text(d, item);
    let href = html_parse_href(d, item);
    let taken = string_take(href, 3);
    let v = {
      text,
      href,
      book_code: taken,
    };
    return v;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
