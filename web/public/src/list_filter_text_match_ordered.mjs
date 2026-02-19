import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { text_match_ordered_curried } from "../../../love/public/src/text_match_ordered_curried.mjs";
export function list_filter_text_match_ordered(values, query) {
  let lambda = text_match_ordered_curried(query);
  let filtered = list_filter(values, lambda);
  return filtered;
}
