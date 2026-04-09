import { list_next_try_generic } from "../../../love/public/src/list_next_try_generic.mjs";
import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
export function list_next_try(list, item) {
  let fn = list_index_of_next;
  let next = list_next_try_generic(fn, list, item);
  return next;
}
