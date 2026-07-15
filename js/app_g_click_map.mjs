import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_click_npc_if } from "./app_g_click_npc_if.mjs";
import { app_g_player_coordinates_update_move } from "./app_g_player_coordinates_update_move.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
export async function app_g_click_map(
  clicked_coordinates,
  player_img_c,
  div_map,
) {
  let npcs = await app_g_npcs_get();
  let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
  let npc_clicked = list_empty_not_is(npcs_matched);
  await app_g_player_coordinates_update_move(
    npc_clicked,
    clicked_coordinates,
    player_img_c,
    div_map,
  );
  await app_g_click_npc_if(npc_clicked, div_map, npcs_matched, player_img_c);
}
