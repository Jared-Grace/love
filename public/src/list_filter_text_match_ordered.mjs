import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { text_match_ordered_curried } from "../../../love/public/src/text_match_ordered_curried.mjs";
export function list_filter_text_match_ordered(filtered, list) {
  let lambda2 = text_match_ordered_curried(filtered);
  filtered = list_filter(list, lambda2);
  return filtered;
}
