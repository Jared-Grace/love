import { list_splice } from "../../../love/public/src/list_splice.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { number_is } from "../../../love/public/src/number_is.mjs";
export function list_insert_generic(index, list, delete_count, value) {
  let b = number_is(index);
  assert(b);
  list_splice(list, index, delete_count, value);
}
