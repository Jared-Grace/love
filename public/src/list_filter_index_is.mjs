import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_index_is_curried } from "../../../love/public/src/list_index_is_curried.mjs";
export function list_filter_index_is(list, indices) {
  let filter = list_index_is_curried(list);
  let filtered = list_filter(indices, filter);
  return filtered;
}
