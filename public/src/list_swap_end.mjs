import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { list_index_last_second } from "../../../love/public/src/list_index_last_second.mjs";
import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export function list_swap_end(list) {
  let index_last = list_index_last(list);
  let index_last_second = list_index_last_second(list);
  list_swap_at(list, index_last, index_last_second);
}
