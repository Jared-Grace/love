import { equal } from "./equal.mjs";
import { g_distance } from "./g_distance.mjs";
export function g_distance_equal(player, coordinates, d) {
  let distance = g_distance(player, coordinates);
  let zi = equal(distance, d);
  return zi;
}
