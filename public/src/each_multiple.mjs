import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function each_multiple(lists, lambda) {
  let first = list_first(lists);
  function lambda2(item, index) {
    let items = lists_get(lists, index);
    lambda(items);
  }
  each_index(first, lambda2);
}
