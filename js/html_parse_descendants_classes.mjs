import { list_sort_text } from "./list_sort_text.mjs";
import { text_split } from "./text_split.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { text_is } from "./text_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_parse_attr } from "./html_parse_attr.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
export function html_parse_descendants_classes(item, d) {
  let descendants = html_parse_find_list_to(item, "*");
  function lambda2(la) {
    function lambda(item) {
      let c = html_parse_attr(d, item, "class");
      if (text_is(c)) {
        let split = text_split(c, " ");
        each(split, la);
      }
    }
    each(descendants, lambda);
  }
  let list = list_adder(lambda2);
  let classes = list_unique(list);
  list_sort_text(classes);
  return classes;
}
