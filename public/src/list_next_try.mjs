import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
export function list_next_try(list, item) {
  let fn = list_index_of_next;
  let index_next = fn(list, item);
  if (null_is(index_next)) {
    return index_next;
  }
  let next = list_get(list, index_next);
  return next;
}
