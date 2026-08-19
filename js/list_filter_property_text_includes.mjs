import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function list_filter_property_text_includes(list, property_name, part) {
  "keep the entries whose named property holds the search text anywhere in it, reading a capital and a small letter as the same letter, so somebody typing span still finds Spanish";
  arguments_assert(arguments, 3);
  let q = text_lower_to(part);
  function lambda(item) {
    let text = property_get(item, property_name);
    let lower = text_lower_to(text);
    let m = text_includes(lower, q);
    return m;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
