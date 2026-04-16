import { app_g_click_npc_if } from "../../../love/public/src/app_g_click_npc_if.mjs";
import { app_g_player_coordinates_update_move } from "../../../love/public/src/app_g_player_coordinates_update_move.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_object_includes } from "../../../love/public/src/list_filter_object_includes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_click_map(
  clicked_coordinates,
  player_img_c,
  div_map,
  refresh,
) {
  let npcs = property_get(g, "npcs");
  let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
  let npc_clicked = list_empty_not_is(npcs_matched);
  await app_g_player_coordinates_update_move(
    npc_clicked,
    clicked_coordinates,
    player_img_c,
    div_map,
  );
  await app_g_click_npc_if(npc_clicked, div_map, npcs_matched, refresh);
}
