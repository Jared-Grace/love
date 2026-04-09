import { list_index_of_previous } from "../../../love/public/src/list_index_of_previous.mjs";
import { list_next_try_generic } from "../../../love/public/src/list_next_try_generic.mjs";
export function list_previous_try(list, item) {
  let fn = list_index_of_previous;
  let next = list_next_try_generic(fn, list, item);
  return next;
}
