import { list_size_1_assert } from "./list_size_1_assert.mjs";
import { list_first } from "./list_first.mjs";
export function list_single(list) {
  list_size_1_assert(list);
  let first = list_first(list);
  return first;
}
