import { object_assign } from "./object_assign.mjs";
import { app_g_player_move } from "./app_g_player_move.mjs";
import { app_g_player_coordinates_update } from "./app_g_player_coordinates_update.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
export async function app_g_player_coordinates_update_move(
  npc_clicked,
  clicked_coordinates,
  player_img_c,
  div_map,
) {
  let coordinates_move_to = await app_g_player_coordinates_update(
    npc_clicked,
    clicked_coordinates,
  );
  await app_g_player_move(coordinates_move_to, player_img_c, div_map);
  let player = await app_g_player_get();
  object_assign(player, coordinates_move_to);
}
