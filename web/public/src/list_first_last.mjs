import { list_multiple_is_assert } from "../../../love/public/src/list_multiple_is_assert.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_first_last(list) {
  list_multiple_is_assert(list);
  let first = list_first(list);
  let last = list_last(list);
  let fl = [first, last];
  return fl;
}
