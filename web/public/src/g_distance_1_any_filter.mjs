import { log } from "../../../love/public/src/log.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { g_distance_1_any_curried_right } from "../../../love/public/src/g_distance_1_any_curried_right.mjs";
export function g_distance_1_any_filter(waters, candidates) {
  let c = g_distance_1_any_curried_right(waters);
  let filtered = list_filter(candidates, c);
  log(g_distance_1_any_filter.name, {
    filtered,
  });
  return filtered;
}
