import { marker } from "./marker.mjs";
export function html_parse_list_text_to(query) {
  marker("1");
  function lambda(i, el) {
    let v = $(el).text();
    return v;
  }
  return query.map(lambda).get();
}
