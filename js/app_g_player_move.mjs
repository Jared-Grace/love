import { object_assign } from "./object_assign.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { g_distance_at_least_1 } from "./g_distance_at_least_1.mjs";
export async function app_g_player_move(
  coordinates_move_to,
  player_img_c,
  div_map,
) {
  let player = await app_g_player_get();
  let away = g_distance_at_least_1(player, coordinates_move_to);
  object_assign(player, coordinates_move_to);
  if (away) {
    await app_g_player_move_animate(coordinates_move_to, player_img_c);
  }
  await app_g_player_center(div_map, player_img_c);
}
