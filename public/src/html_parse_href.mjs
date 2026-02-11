import { text_is_if_or_null } from "../../../love/public/src/text_is_if_or_null.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
export function html_parse_href(d, item) {
  const name = "href";
  let href = html_parse_attr(d, item, name);
  href = text_is_if_or_null(href);
  return href;
}
