import { marker } from "./marker.mjs";
export function html_parse_href(d, item) {
  marker("1");
  const name = "href";
  let href = d(item).attr(name);
  return href;
}
