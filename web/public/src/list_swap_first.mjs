import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_swap_first(list, item) {
  let first = list_first(list);
  list_swap(list, first, item);
}
