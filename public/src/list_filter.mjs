import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function list_filter(list, lambda$item) {
  list_is_assert(list);
  function lambda(item) {
    let match = lambda$item(item);
    return match;
  }
  let filtered = list.filter(lambda);
  return filtered;
}
