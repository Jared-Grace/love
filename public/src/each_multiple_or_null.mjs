import { list_map } from "../../../love/public/src/list_map.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function each_multiple_or_null(lists, lambda) {
  marker("1");
  let mapped = list_map(list, function lambda3(item2) {});
  let first = list_first(lists);
  function lambda2(item, index) {
    let items = lists_get(lists, index);
    lambda(items);
  }
  each_index(first, lambda2);
}
