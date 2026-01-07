import { lists_get_or_null } from "../../../love/public/src/lists_get_or_null.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_size } from "./list_size.mjs";
export function each_multiple_or_null(lists, lambda) {
  marker("1");
  let mapped = list_map(lists, list_size);
  let max = list_max(mapped);
  function lambda2(index) {
    let items = lists_get_or_null(lists, index);
    lambda(items);
  }
  each_range(max, lambda2);
}
