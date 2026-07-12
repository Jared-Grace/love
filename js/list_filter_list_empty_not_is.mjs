import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_list_empty_not_is(list) {
  let filtered = list_filter(list, list_empty_not_is);
  return filtered;
}
