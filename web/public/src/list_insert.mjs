import { list_splice } from "./list_splice.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
export function list_insert(list, index, value) {
  let b = number_is(index);
  assert(b);
  const delete_count = 0;
  list_splice(list, index, delete_count, value);
}
