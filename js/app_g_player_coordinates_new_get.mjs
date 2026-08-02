import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { g_coordinates_clicked_adjascent_nearest_player } from "./g_coordinates_clicked_adjascent_nearest_player.mjs";
export async function app_g_player_coordinates_new_get(
  npc_clicked,
  clicked_coordinates,
) {
  let coordinates_move_to = clicked_coordinates;
  if (npc_clicked) {
    let g = await app_g_game_save_get();
    let player = await app_g_player_get();
    coordinates_move_to = g_coordinates_clicked_adjascent_nearest_player(
      g,
      player,
      clicked_coordinates,
    );
  }
  return coordinates_move_to;
}
