import { app_g_day_line_blocking_is } from "./app_g_day_line_blocking_is.mjs";
import { app_g_day_line_back_out } from "./app_g_day_line_back_out.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { app_g_player_path_animate } from "./app_g_player_path_animate.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_g_player_move(
  coordinates_move_to,
  player_img_c,
  div_map,
) {
  "the people walking behind the player stand in the way like anybody else, so a player who walks into a dead end can be sealed in by their own line. when that is the only thing between them and where they want to go, the line backs down its own trail until the way is open - which is also what tapping somebody in your own line means: walk back down the line to them";
  let player = await app_g_player_get();
  let g = await app_g_game_save_get();
  let blocking = app_g_day_line_blocking_is(g, player, coordinates_move_to);
  if (blocking) {
    await app_g_day_line_back_out(
      player,
      coordinates_move_to,
      player_img_c,
      div_map,
    );
  }
  let path = g_coordinates_path_shortest(g, player, coordinates_move_to);
  let reachable = list_empty_not_is(path);
  if (reachable) {
    await app_g_player_path_animate(player, path, player_img_c, div_map);
    object_assign(player, coordinates_move_to);
  }
  return reachable;
}
