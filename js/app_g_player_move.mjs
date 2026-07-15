import { object_assign } from "./object_assign.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { app_g_player_path_animate } from "./app_g_player_path_animate.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_g_player_move(
  coordinates_move_to,
  player_img_c,
  div_map,
) {
  let player = await app_g_player_get();
  let g = await app_g_game_save_get();
  let path = g_coordinates_path_shortest(g, player, coordinates_move_to);
  let reachable = list_empty_not_is(path);
  if (reachable) {
    await app_g_player_path_animate(path, player_img_c, div_map);
    object_assign(player, coordinates_move_to);
    app_g_player_center(coordinates_move_to, player_img_c, div_map);
    await app_g_player_save(player);
  }
}
