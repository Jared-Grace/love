import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
export function list_swap_beginning(list) {
  let index_last = 0;
  let index_last_second = 1;
  list_swap_at(list, index_last, index_last_second);
}
