import { list_filter } from "./list_filter.mjs";
import { equal_not_curried } from "./equal_not_curried.mjs";
export function list_filter_equal_not(list, value) {
  let c = equal_not_curried(value);
  let filtered = list_filter(list, c);
  return filtered;
}
