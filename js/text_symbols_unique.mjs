import { list_sort_text } from "./list_sort_text.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function text_symbols_unique(s) {
  function lambda(la) {
    let split = text_split_empty(s);
    each(split, la);
  }
  let unique_list = list_adder_unique(lambda);
  list_sort_text(unique_list);
  let unique = list_join_empty(unique_list);
  return unique;
}
