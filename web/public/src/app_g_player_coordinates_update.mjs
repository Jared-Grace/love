import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { app_g_player_coordinates_new_get } from "../../../love/public/src/app_g_player_coordinates_new_get.mjs";
export async function app_g_player_coordinates_update(
  npc_clicked,
  clicked_coordinates,
) {
  let player = await app_g_player_get();
  let coordinates_move_to = await app_g_player_coordinates_new_get(
    npc_clicked,
    clicked_coordinates,
  );
  return coordinates_move_to;
}
