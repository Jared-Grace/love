import { list_map } from "./list_map.mjs";
import { html_parse_href_text } from "./html_parse_href_text.mjs";
export function html_parse_href_text_map(d, list) {
  function lambda(item) {
    let both = html_parse_href_text(d, item);
    return both;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
