import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function list_map_async(list, lambda$item) {
  list_is_assert(list);
  let mapped = list.map(lambda$item);
  return mapped;
}
