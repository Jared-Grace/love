import { list_insert_generic } from "./list_insert_generic.mjs";
import { list_splice } from "./list_splice.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
export function list_replace(list, index, value) {
  const delete_count = 1;
  list_insert_generic(index, list, delete_count, value);
}
