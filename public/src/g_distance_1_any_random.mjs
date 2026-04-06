import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { g_distance_1_any_filter } from "../../../love/public/src/g_distance_1_any_filter.mjs";
export function g_distance_1_any_random(waters, coordinates) {
  let filtered = g_distance_1_any_filter(waters, coordinates);
  let r = list_random_item(filtered);
  return r;
}
