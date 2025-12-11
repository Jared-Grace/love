import { marker } from "../../../love/public/src/marker.mjs";
import { list_swap_inner } from "../../../love/public/src/list_swap_inner.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_swap_at(list, a, b) {
  marker("1");
  let ai = list_index_of(list, a);
  let bi = list_index_of(list, b);
  list_swap_inner(list, ai, b, bi, a);
}
