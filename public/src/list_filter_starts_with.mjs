import { text_starts_with_curried_right } from "../../../love/public/src/text_starts_with_curried_right.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function list_filter_starts_with(list, prefix) {
  let lambda = text_starts_with_curried_right(prefix);
  let filtered = list_filter(list, lambda);
  return filtered;
}
