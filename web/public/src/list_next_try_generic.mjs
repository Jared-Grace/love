import { list_get } from "../../../love/public/src/list_get.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
export function list_next_try_generic(fn, list, item) {
  let index_next = fn(list, item);
  let next = null;
  if (null_not_is(index_next)) {
    next = list_get(list, index_next);
  }
  return next;
}
