import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_swap_inner } from "../../../love/public/src/list_swap_inner.mjs";
export function list_swap_at(list, ai, bi) {
  let a = list_get(list, ai);
  let b = list_get(list, bi);
  list_swap_inner(list, ai, b, bi, a);
}
