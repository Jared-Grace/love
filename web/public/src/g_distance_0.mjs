import { equal } from "../../../love/public/src/equal.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_0(player, coordinates) {
  const d = 0;
  let distance = g_distance(player, coordinates);
  const zi = equal(distance, d);
  return zi;
}
