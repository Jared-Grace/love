import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_replace } from "../../../love/public/src/list_replace.mjs";
export function list_swap(list, a, b) {
  let ai = list_index_of(list, a);
  let bi = list_index_of(list, b);
  list_replace(list, ai, b);
  list_replace(list, bi, a);
}
