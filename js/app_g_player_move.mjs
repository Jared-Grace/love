import { app_g_crowd_part } from "./app_g_crowd_part.mjs";
import { app_g_player_path_choose } from "./app_g_player_path_choose.mjs";
import { app_g_day_line_blocking_is } from "./app_g_day_line_blocking_is.mjs";
import { app_g_day_line_back_out } from "./app_g_day_line_back_out.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
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
  let path = app_g_player_path_choose(g, player, coordinates_move_to);
  let reachable = list_empty_not_is(path);
  if (reachable) {
    ("the way opens before the player walks it: anybody standing on it steps aside first, and the few too hemmed in to have anywhere to go are passed one at a time by trading places as the walk reaches them");
    app_g_crowd_part(g, path);
    await app_g_player_path_animate(g, player, path, player_img_c, div_map);
    object_assign(player, coordinates_move_to);
  }
  return reachable;
}
