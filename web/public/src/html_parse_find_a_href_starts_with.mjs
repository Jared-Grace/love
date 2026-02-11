import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_parse_find_a_href_text } from "../../../love/public/src/html_parse_find_a_href_text.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function html_parse_find_a_href_starts_with(root, d, prefix) {
  let mapped = html_parse_find_a_href_text(root, d);
  let mapped2 = list_map_property(mapped, "href");
  let filtered2 = list_filter(list, text_is);
  let filtered = list_filter_starts_with(mapped2, prefix);
  return filtered;
}
