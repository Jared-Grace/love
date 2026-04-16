import { at_least_1 } from "../../../love/public/src/at_least_1.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_at_least_1(player, coordinates_move_to) {
  let distance = g_distance(player, coordinates_move_to);
  const away = at_least_1(distance);
  return away;
}
