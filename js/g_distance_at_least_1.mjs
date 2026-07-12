import { log_json } from "./log_json.mjs";
import { at_least_1 } from "./at_least_1.mjs";
import { g_distance } from "./g_distance.mjs";
export function g_distance_at_least_1(player, coordinates_move_to) {
  let distance = g_distance(player, coordinates_move_to);
  log_json({
    distance,
    player,
    coordinates_move_to,
  });
  let away = at_least_1(distance);
  return away;
}
