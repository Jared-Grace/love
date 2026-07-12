import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_text_empty_not_is(list) {
  let filtered = list_filter(list, text_empty_not_is);
  return filtered;
}
