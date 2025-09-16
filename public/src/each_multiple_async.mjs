import { marker } from "./marker.mjs";
import { lists_get } from "./lists_get.mjs";
import { each_index } from "./each_index.mjs";
import { list_first } from "./list_first.mjs";
export function each_multiple_async(lists, lambda) {
  marker("1");
  let first = list_first(lists);
  function lambda2(item, index) {
    let items = lists_get(lists, index);
    lambda(items);
  }
  each_index(first, lambda2);
}
