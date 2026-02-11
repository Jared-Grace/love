import { ebible_url } from "../../../love/public/src/ebible_url.mjs";
import { ebible_url_details } from "../../../love/public/src/ebible_url_details.mjs";
import { http_local_html_parse } from "../../../love/public/src/http_local_html_parse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "../../../love/public/src/html_parse_find_a_href_starts_with.mjs";
export async function ebible_versions() {
  let url = ebible_url() + "download.php";
  let r = await http_local_html_parse(url);
  let root = property_get(r, "root");
  let d = property_get(r, "d");
  let book_code = ebible_url_details();
  let list = html_parse_find_a_href_starts_with(root, d, book_code);
  let mapped = list_map_prefix_without(list, book_code);
  let unique = list_unique(mapped);
  list_sort_text(unique);
  return unique;
}
