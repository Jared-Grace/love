import { marker } from "./marker.mjs";
export function html_parse_href(d, item) {
  marker("1");
  let v = d(item).attr("href");
  return v;
}
