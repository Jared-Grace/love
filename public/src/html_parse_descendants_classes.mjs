import { string_is } from "./string_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
export function html_parse_descendants_classes(item, d) {
  let descendants = html_parse_find_list_to(item, "*");
  function lambda(item) {
    let c = html_parse_attr(d, item, "class");
    return c;
  }
  let mapped = list_map(descendants, lambda);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, string_is);
  return filtered;
}
