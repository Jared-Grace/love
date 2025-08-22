import { lists_get } from "./lists_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_first } from "./list_first.mjs";
export function each_multiple(lists, lambda) {
  let first = list_first(lists);
  each_index(first, (item, index) => {
    let items = lists_get(lists, index);
    lambda(items);
  });
}
