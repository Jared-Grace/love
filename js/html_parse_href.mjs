import { text_is_if_or_null } from "./text_is_if_or_null.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
export function html_parse_href(d, item) {
  let name = "href";
  let href = html_parse_attr(d, item, name);
  href = text_is_if_or_null(href);
  return href;
}
