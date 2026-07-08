import { each_range } from "../../../love/public/src/each_range.mjs";
export function each_multiple_generic(lists, getter, lambda, size_get) {
  let max = size_get(lists);
  function lambda_each_range(index) {
    let items = getter(lists, index);
    lambda(items);
  }
  each_range(max, lambda_each_range);
}
