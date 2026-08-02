import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_all(list, lambda$item) {
  let list2 = list_filter(list, lambda$item);
  let left = list_size(list2);
  let right = list_size(list);
  let a = equal(left, right);
  return a;
}
