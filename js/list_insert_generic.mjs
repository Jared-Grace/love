import { list_splice } from "./list_splice.mjs";
import { assert } from "./assert.mjs";
import { number_is } from "./number_is.mjs";
export function list_insert_generic(index, list, delete_count, value) {
  let b = number_is(index);
  assert(b);
  list_splice(list, index, delete_count, value);
}
