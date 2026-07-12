import { list_any } from "./list_any.mjs";
import { g_distance_1_curried } from "./g_distance_1_curried.mjs";
export function g_distance_1_any(c, waters) {
  let lambda = g_distance_1_curried(c);
  let any = list_any(waters, lambda);
  return any;
}
