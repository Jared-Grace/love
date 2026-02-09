import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
export function text_symbols_unique(s) {
  function lambda4(la) {
    let split = text_split_empty(s);
    each(split, la);
  }
  let unique_list = list_adder_unique(lambda4);
  list_sort_text(unique_list);
  let unique = list_join_empty(unique_list);
  return unique;
}
