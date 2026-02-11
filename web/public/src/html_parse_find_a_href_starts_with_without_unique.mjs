import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { html_parse_find_a_href_starts_with } from "../../../love/public/src/html_parse_find_a_href_starts_with.mjs";
export function html_parse_find_a_href_starts_with_without_unique(
  root,
  d,
  prefix,
) {
  let list = html_parse_find_a_href_starts_with(root, d, prefix);
  let mapped = list_map_prefix_without(list, prefix);
  let unique = list_unique(mapped);
  list_sort_text(unique);
  return unique;
}
