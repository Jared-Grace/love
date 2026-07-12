import { g_distance_equal } from "./g_distance_equal.mjs";
export function g_distance_1(left, right) {
  let d = 1;
  let zi = g_distance_equal(left, right, d);
  return zi;
}
