import { app_g_day_guide_show } from "./app_g_day_guide_show.mjs";
import { app_g_day_travel_blocked_is } from "./app_g_day_travel_blocked_is.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_click_npc_if } from "./app_g_click_npc_if.mjs";
import { app_g_player_coordinates_update_move } from "./app_g_player_coordinates_update_move.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_self_menu } from "./app_g_self_menu.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
export async function app_g_click_map(
  clicked_coordinates,
  player_img_c,
  div_map,
) {
  let player = await app_g_player_get();
  if (g_coordinates_same_is(clicked_coordinates, player)) {
    app_g_self_menu();
    return;
  }
  if (app_g_day_travel_blocked_is(clicked_coordinates)) {
    app_g_discern_prevented_overlay(5000);
    return;
  }
  let npcs = await app_g_npcs_get();
  let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
  let npc_clicked = list_empty_not_is(npcs_matched);
  await app_g_player_coordinates_update_move(
    npc_clicked,
    clicked_coordinates,
    player_img_c,
    div_map,
  );
  await app_g_day_guide_show(div_map);
  await app_g_click_npc_if(npc_clicked, div_map, npcs_matched, player_img_c);
}
