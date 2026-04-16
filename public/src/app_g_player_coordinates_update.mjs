import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
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
  object_assign(player, coordinates_move_to);
  return coordinates_move_to;
}
