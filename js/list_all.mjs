import { list_filter_size } from "./list_filter_size.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_all(list, lambda$item) {
  let left = list_filter_size(list, lambda$item);
  let right = list_size(list);
  let a = equal(left, right);
  return a;
}
