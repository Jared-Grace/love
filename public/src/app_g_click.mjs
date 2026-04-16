import { app_g_click_map } from "../../../love/public/src/app_g_click_map.mjs";
import { app_g_menu_new } from "../../../love/public/src/app_g_menu_new.mjs";
import { g_distance_0 } from "../../../love/public/src/g_distance_0.mjs";
import { app_g_event_target_closest_tile_coordinates } from "../../../love/public/src/app_g_event_target_closest_tile_coordinates.mjs";
import { g_tutorials_each_remove_try } from "../../../love/public/src/g_tutorials_each_remove_try.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
export async function app_g_click(e, div_map, player_img_c, refresh) {
  let clicked_coordinates = app_g_event_target_closest_tile_coordinates(e);
  g_tutorials_each_remove_try();
  let g = await app_g_game_save_get();
  let player = property_get(g, "player");
  const clicked_on_player = g_distance_0(player, clicked_coordinates);
  if (clicked_on_player) {
    await app_g_menu_new(div_map);
  } else {
    await app_g_click_map(
      g,
      clicked_coordinates,
      player_img_c,
      div_map,
      refresh,
    );
  }
  await app_g_player_save(player);
}
