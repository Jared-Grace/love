import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { list_remove_at_count } from "../../../love/public/src/list_remove_at_count.mjs";
export function list_remove_last_multiple(list, count) {
  let index_last = list_index_last(list);
  index_last - count + 1;
  let e = list_remove_at_count(list, 0, index_last);
  return e;
}
