import { add } from "./add.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_remove_at_count } from "./list_remove_at_count.mjs";
import { subtract } from "./subtract.mjs";
export function list_remove_last_multiple(list, count) {
  let index_last = list_index_last(list);
  let left = subtract(index_last, count);
  let start = add(left, 1);
  let e = list_remove_at_count(list, start, count);
  return e;
}
