import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_index_is(list, index) {
  arguments_assert(arguments, 2);
  let e = list_empty_is(list);
  let v = false;
  if (e) {
    return v;
  }
  if (less_than(index, 0)) {
    return v;
  }
  let index_last = list_index_last(list);
  if (greater_than(index, index_last)) {
    return v;
  }
  return true;
}
