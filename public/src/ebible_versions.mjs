import { list_unique } from "./list_unique.mjs";
import { list_map_prefix_without } from "./list_map_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { html_parse } from "./html_parse.mjs";
import { http_local_text } from "./http_local_text.mjs";
export async function ebible_versions() {
  let url = "https://ebible.org/download.php";
  let text = await http_local_text(url);
  let { d, root } = await html_parse(text);
  let list = html_parse_find_a_href_starts_with(root, d, "details.php?id=");
  let mapped = list_map_prefix_without(list, "details.php?id=");
  let unique = list_unique(mapped);
  return unique;
}
