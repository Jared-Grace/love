import { list_map_prefix_without } from "./list_map_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { html_parse } from "./html_parse.mjs";
import { http_local_text } from "./http_local_text.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let url = "https://ebible.org/download.php";
  let text = await http_local_text(url);
  let { d, root } = await html_parse(text);
  let list = html_parse_find_a_href_starts_with(root, d, "details.php?id=");
  let mapped = list_map_prefix_without(list, "details.php?id=");
  return mapped;
  marker("1");
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
