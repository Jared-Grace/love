import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
export function html_parse_descendants_classes(item, d) {
  let descendants = html_parse_find_list_to(item, "*");
  function lambda2(la) {
    function lambda(item) {
      let c = html_parse_attr(d, item, "class");
      if (text_is(c)) {
        let split = string_split(c, " ");
        each(split, la);
      }
    }
    each(descendants, lambda);
  }
  let list = list_adder(lambda2);
  let classes = list_unique(list);
  list_sort_string(classes);
  return classes;
}
