import { g_coordinates_clicked_adjascent_nearest_player } from "../../../love/public/src/g_coordinates_clicked_adjascent_nearest_player.mjs";
import { list_filter_object_includes } from "../../../love/public/src/list_filter_object_includes.mjs";
import { greater_than_or_equal_1 } from "../../../love/public/src/greater_than_or_equal_1.mjs";
import { app_g_click_npc_if } from "../../../love/public/src/app_g_click_npc_if.mjs";
import { g_img_square_style_position_object_later } from "../../../love/public/src/g_img_square_style_position_object_later.mjs";
import { g_distance_0 } from "../../../love/public/src/g_distance_0.mjs";
import { app_g_event_target_closest_tile_coordinates } from "../../../love/public/src/app_g_event_target_closest_tile_coordinates.mjs";
import { g_tutorials_each_remove_try } from "../../../love/public/src/g_tutorials_each_remove_try.mjs";
import { app_g_div_map_container_get } from "../../../love/public/src/app_g_div_map_container_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_scroll_center_container } from "../../../love/public/src/html_scroll_center_container.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { html_on_transitionend } from "../../../love/public/src/html_on_transitionend.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
export async function app_g_click(e, div_map, player_img_c, refresh) {
  let clicked_coordinates = app_g_event_target_closest_tile_coordinates(e);
  g_tutorials_each_remove_try();
  const clicked_on_player = g_distance_0(player, clicked_coordinates);
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  if (clicked_on_player) {
    let overlay = app_g_overlay(div_map);
    app_g_menu(overlay, player);
  } else {
    let npcs = property_get(g, "npcs");
    let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
    let npc_clicked = list_empty_not_is(npcs_matched);
    let coordinates_move_to = null;
    if (npc_clicked) {
      ("find the coordinates next to the npc that is nearest to the player");
      coordinates_move_to = g_coordinates_clicked_adjascent_nearest_player(
        g,
        clicked_coordinates,
        player,
        coordinates_move_to,
      );
    } else {
      coordinates_move_to = clicked_coordinates;
    }
    let distance = g_distance(player, coordinates_move_to);
    object_assign(player, coordinates_move_to);
    const away = greater_than_or_equal_1(distance);
    if (away) {
      let properties = ["left", "top"];
      let on_transition_begin = g_img_square_style_position_object_later(
        player,
        player_img_c,
      );
      await html_on_transitionend(
        properties,
        player_img_c,
        on_transition_begin,
      );
    }
    let container = app_g_div_map_container_get(div_map);
    await html_scroll_center_container(player_img_c, container);
    await app_g_click_npc_if(npc_clicked, div_map, npcs_matched, refresh);
  }
  await app_g_player_save(player);
}
