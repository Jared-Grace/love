import { html_parse_attr } from "./html_parse_attr.mjs";
import { marker } from "./marker.mjs";
export function html_parse_href(d, item) {
  marker("1");
  const name = "href";
  let href = html_parse_attr(d, item, name);
  return href;
}
