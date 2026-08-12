import { app_g_player_get } from "./app_g_player_get.mjs";
import { g_distance_1 } from "./g_distance_1.mjs";
export async function app_g_player_beside_is(coordinates) {
  "is the player standing right next to this square - one step away, straight up, down, left or right. asked after a walk, to tell whether it arrived";
  let player = await app_g_player_get();
  let beside = g_distance_1(player, coordinates);
  return beside;
}
