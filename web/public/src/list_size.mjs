import { list_is_assert } from "./list_is_assert.mjs";
export function list_size(list) {
  list_is_assert(list);
  let size = list.length;
  return size;
}
