import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_empty_not_is(item) {
  let filtered = list_filter(item, string_empty_not_is);
  return filtered;
}
