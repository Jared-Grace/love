import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_empty_not_is(item) {
  let filtered2 = list_filter(item, string_empty_not_is);
  return filtered2;
}
