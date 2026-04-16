import { g_coordinates_clicked_adjascent_nearest_player } from "../../../love/public/src/g_coordinates_clicked_adjascent_nearest_player.mjs";
export async function app_g_player_coordinates_new_get(
  npc_clicked,
  clicked_coordinates,
) {
  let coordinates_move_to = clicked_coordinates;
  if (npc_clicked) {
    coordinates_move_to = await g_coordinates_clicked_adjascent_nearest_player(
      clicked_coordinates,
      coordinates_move_to,
    );
  }
  return coordinates_move_to;
}
