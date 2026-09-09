import { html_parse_find_a_href_starts_with } from "./html_parse_find_a_href_starts_with.mjs";
import { list_map_prefix_without } from "./list_map_prefix_without.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function html_parse_find_a_href_starts_with_without_unique(
  root,
  d,
  prefix,
) {
  let list = html_parse_find_a_href_starts_with(root, d, prefix);
  let mapped = list_map_prefix_without(list, prefix);
  let unique = list_unique_sorted(mapped);
  return unique;
}
