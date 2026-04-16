import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { app_g_player_center } from "../../../love/public/src/app_g_player_center.mjs";
import { app_g_player_move_animate } from "../../../love/public/src/app_g_player_move_animate.mjs";
import { g_distance_at_least_1 } from "../../../love/public/src/g_distance_at_least_1.mjs";
export async function app_g_player_move(
  coordinates_move_to,
  player_img_c,
  div_map,
) {
  let player = await app_g_player_get();
  const away = g_distance_at_least_1(player, coordinates_move_to);
  if (away) {
    await app_g_player_move_animate(player, player_img_c);
  }
  await app_g_player_center(div_map, player_img_c);
}
