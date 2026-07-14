import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_player_path_animate } from "./app_g_player_path_animate.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
export async function app_g_player_move_path(
  player,
  coordinates_move_to,
  player_img_c,
  div_map,
) {
  let g = await app_g_game_save_get();
  let path = g_coordinates_path_shortest(g, player, coordinates_move_to);
  let has_path = list_empty_not_is(path);
  if (has_path) {
    await app_g_player_path_animate(path, player_img_c, div_map);
  } else {
    await app_g_player_move_animate(coordinates_move_to, player_img_c);
  }
}
