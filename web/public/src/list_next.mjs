import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
export function list_next(list, item) {
  let index_next = list_index_of_next(list, item);
  let next = list_get(list, index_next);
  return next;
}
