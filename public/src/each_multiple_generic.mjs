import { each_range } from "../../../love/public/src/each_range.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function each_multiple_generic(lists, getter, lambda) {
  let mapped = list_map(lists, list_size);
  let max = list_max(mapped);
  function lambda2(index) {
    let items = getter(lists, index);
    lambda(items);
  }
  each_range(max, lambda2);
}
