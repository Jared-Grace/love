import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_list_empty_not_is(list) {
  let filtered = list_filter(list, list_empty_not_is);
  return filtered;
}
