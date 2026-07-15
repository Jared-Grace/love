import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_click_map } from "./app_g_click_map.mjs";
import { app_g_menu_new } from "./app_g_menu_new.mjs";
import { g_distance_0 } from "./g_distance_0.mjs";
import { app_g_event_target_closest_tile_coordinates } from "./app_g_event_target_closest_tile_coordinates.mjs";
import { g_tutorials_each_remove_try } from "./g_tutorials_each_remove_try.mjs";
export async function app_g_click(e, div_map, player_img_c) {
  let clicked_coordinates = app_g_event_target_closest_tile_coordinates(e);
  g_tutorials_each_remove_try();
  let player = await app_g_player_get();
  let clicked_on_player = g_distance_0(player, clicked_coordinates);
  if (clicked_on_player) {
    await app_g_menu_new(div_map);
  } else {
    await app_g_click_map(clicked_coordinates, player_img_c, div_map);
  }
}
