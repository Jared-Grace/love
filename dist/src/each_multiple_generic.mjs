import { lists_size_max } from "../../../love/public/src/lists_size_max.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function each_multiple_generic(lists, getter, lambda) {
  let max = lists_size_max(lists);
  function lambda_each_range(index) {
    let items = getter(lists, index);
    lambda(items);
  }
  each_range(max, lambda_each_range);
}
