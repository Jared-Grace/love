import { text_starts_with_curried_right } from "./text_starts_with_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with(list, prefix) {
  let lambda = text_starts_with_curried_right(prefix);
  let filtered = list_filter(list, lambda);
  return filtered;
}
