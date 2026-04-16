import { app_g_player_move } from "../../../love/public/src/app_g_player_move.mjs";
import { app_g_player_coordinates_update } from "../../../love/public/src/app_g_player_coordinates_update.mjs";
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
}
