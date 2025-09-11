import { list_map } from "./list_map.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { html_parse } from "./html_parse.mjs";
import { http_local_text } from "./http_local_text.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let url = "https://ebible.org/download.php";
  let text = await http_local_text(url);
  let { d, root } = await html_parse(text);
  const prefix = "details.php?id=";
  let filtered = html_parse_find_a_href_starts_with(root, d, prefix);
  let result = string_prefix_without(s, prefix);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  return filtered;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
