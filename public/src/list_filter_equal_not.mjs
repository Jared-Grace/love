import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { equal_not_curried } from "../../../love/public/src/equal_not_curried.mjs";
export function list_filter_equal_not(mapped, en) {
  let r3 = equal_not_curried(en);
  let filtered = list_filter(mapped, r3);
  return filtered;
}
