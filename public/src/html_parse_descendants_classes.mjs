import { string_split } from "./string_split.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { string_is } from "./string_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
export function html_parse_descendants_classes(item, d) {
  let descendants = html_parse_find_list_to(item, "*");
  function lambda2(la) {
    function lambda(item) {
      let c = html_parse_attr(d, item, "class");
      let split = string_split(s, separator);
      return c;
    }
    let mapped = each(descendants, lambda);
  }
  let list = list_adder(lambda2);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, string_is);
  return filtered;
}
