import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_parse_href_text_map } from "../../../love/public/src/html_parse_href_text_map.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
export function html_parse_find_a_href_starts_with(root, d, book_code) {
  let list = html_parse_find_list_to(root, "a");
  let mapped = html_parse_href_text_map(d, list);
  let mapped2 = list_map_property(mapped, "href");
  let filtered = list_filter_starts_with(mapped2, book_code);
  return filtered;
}
