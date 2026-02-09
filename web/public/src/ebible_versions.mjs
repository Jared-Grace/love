import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "../../../love/public/src/html_parse_find_a_href_starts_with.mjs";
import { html_parse } from "../../../love/public/src/html_parse.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
export async function ebible_versions() {
  let url = "https://ebible.org/download.php";
  let text = await http_local_text(url);
  let v = await html_parse(text);
  let root = object_property_get(v, "root");
  let d = object_property_get(v, "d");
  let list = html_parse_find_a_href_starts_with(root, d, "details.php?id=");
  let mapped = list_map_prefix_without(list, "details.php?id=");
  let unique = list_unique(mapped);
  list_sort_text(unique);
  return unique;
}
