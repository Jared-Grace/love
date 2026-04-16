import { app_g_players_coordinates_update } from "../../../love/public/src/app_g_players_coordinates_update.mjs";
import { app_g_player_move } from "../../../love/public/src/app_g_player_move.mjs";
import { list_filter_object_includes } from "../../../love/public/src/list_filter_object_includes.mjs";
import { app_g_click_npc_if } from "../../../love/public/src/app_g_click_npc_if.mjs";
import { g_distance_0 } from "../../../love/public/src/g_distance_0.mjs";
import { app_g_event_target_closest_tile_coordinates } from "../../../love/public/src/app_g_event_target_closest_tile_coordinates.mjs";
import { g_tutorials_each_remove_try } from "../../../love/public/src/g_tutorials_each_remove_try.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
export async function app_g_click(e, div_map, player_img_c, refresh) {
  let clicked_coordinates = app_g_event_target_closest_tile_coordinates(e);
  g_tutorials_each_remove_try();
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  const clicked_on_player = g_distance_0(player, clicked_coordinates);
  if (clicked_on_player) {
    let overlay = app_g_overlay(div_map);
    app_g_menu(overlay, player);
  } else {
    let npcs = property_get(g, "npcs");
    let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
    let npc_clicked = list_empty_not_is(npcs_matched);
    let coordinates_move_to = await app_g_players_coordinates_update(
      npc_clicked,
      clicked_coordinates,
    );
    await app_g_player_move(coordinates_move_to, player_img_c, div_map);
    await app_g_click_npc_if(npc_clicked, div_map, npcs_matched, refresh);
  }
  await app_g_player_save(player);
}
