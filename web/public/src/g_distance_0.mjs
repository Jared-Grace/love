import { equal } from "../../../love/public/src/equal.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_0(player, clicked_coordinates) {
  let clicked_player_distance = g_distance(player, clicked_coordinates);
  const clicked_on_player = equal(clicked_player_distance, 0);
  return clicked_on_player;
}
