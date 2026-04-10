import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function list_map(list, lambda$item) {
  list_is_assert(list);
  function lambda(item) {
    let r = lambda$item(item);
    return r;
  }
  let mapped = list.map(lambda);
  return mapped;
}
