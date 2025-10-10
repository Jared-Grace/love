import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_parse_href(d, item) {
  marker("1");
  const name = "href";
  let href = html_parse_attr(d, item, name);
  return href;
}
