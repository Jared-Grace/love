import { html_parse_href_text_map } from "./html_parse_href_text_map.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
export function html_parse_find_list_text(bl, selector, d) {
  let list = html_parse_find_list_to(bl, selector);
  let mapped = html_parse_href_text_map(d, list);
  return mapped;
}
