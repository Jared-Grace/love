import { html_parse_href_text_map } from "../../../love/public/src/html_parse_href_text_map.mjs";
import { html_parse_find_a_list_to } from "../../../love/public/src/html_parse_find_a_list_to.mjs";
export function html_parse_find_a_href_text(root, d) {
  let list = html_parse_find_a_list_to(root);
  let mapped = html_parse_href_text_map(d, list);
  return mapped;
}
