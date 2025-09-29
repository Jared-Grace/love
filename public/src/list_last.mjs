import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
export function list_last(list) {
  list_empty_not_is_assert(list);
  let last = list_get_end(list, 0);
  return last;
}
