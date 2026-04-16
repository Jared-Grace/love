import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { app_g_players_coordinates_new_get } from "../../../love/public/src/app_g_players_coordinates_new_get.mjs";
export async function app_g_players_coordinates_update(
  npc_clicked,
  clicked_coordinates,
  player,
) {
  let coordinates_move_to = await app_g_players_coordinates_new_get(
    npc_clicked,
    clicked_coordinates,
  );
  object_assign(player, coordinates_move_to);
  return coordinates_move_to;
}
