import { assert } from "./assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function list_last(list) {
  let item = list_get_end(list, 0);
  return item;
  let ne = list_empty_not_is(list);
  assert(ne);
}
