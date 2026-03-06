import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export function list_filter_index(list, lambda$item$index) {
  list_is_assert(list);
  function list_filter_lambda(item, index) {
    let match = lambda$item$index(item, index);
    return match;
  }
  let filtered = list.filter(list_filter_lambda);
  return filtered;
}
