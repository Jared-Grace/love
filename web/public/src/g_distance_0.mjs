import { equal } from "../../../love/public/src/equal.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_0(player, coordinates) {
  let distance = g_distance(player, coordinates);
  const zi = equal(distance, 0);
  return zi;
}
