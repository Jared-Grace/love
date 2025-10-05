import { marker } from "../../../love/public/src/marker.mjs";
import { html_parse_href_text_map } from "../../../love/public/src/html_parse_href_text_map.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
export function html_parse_find_list_href_text(bl, selector, d) {
  marker("1");
  let list = html_parse_find_list_to(bl, selector);
  let mapped = html_parse_href_text_map(d, list);
  return mapped;
}
