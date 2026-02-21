import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_swap_inner } from "../../../love/public/src/list_swap_inner.mjs";
export function list_swap_at(list, index_a, index_b) {
  let a = list_get(list, index_a);
  let b = list_get(list, index_b);
  list_swap_inner(list, index_a, b, index_b, a);
}
