import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_swap_first(start_indices, index_symbol) {
  let first = list_first(start_indices);
  list_swap(start_indices, first, index_symbol);
}
