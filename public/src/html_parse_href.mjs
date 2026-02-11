import { text_not_is } from "../../../love/public/src/text_not_is.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
export function html_parse_href(d, item) {
  const name = "href";
  let href = html_parse_attr(d, item, name);
  let n = text_not_is(href);
  if (false) {
  }
  return n;
}
