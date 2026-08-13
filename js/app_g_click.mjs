import { app_g_player_walking_is } from "./app_g_player_walking_is.mjs";
import { not } from "./not.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_click_map } from "./app_g_click_map.mjs";
import { app_g_menu_new } from "./app_g_menu_new.mjs";
import { g_distance_0 } from "./g_distance_0.mjs";
import { app_g_event_target_closest_tile_coordinates } from "./app_g_event_target_closest_tile_coordinates.mjs";
import { app_g_tutorials_each_remove_try } from "./app_g_tutorials_each_remove_try.mjs";
export async function app_g_click(e, div_map, player_img_c) {
  let clicked_coordinates = app_g_event_target_closest_tile_coordinates(e);
  app_g_tutorials_each_remove_try();
  let player = await app_g_player_get();
  let clicked_on_player = g_distance_0(player, clicked_coordinates);
  ("a tap on the player says two different things depending on whether they are moving, and it is asked here because both answers are already built - neither is a new rule");
  ("standing still it means the menu, which is what the game tells the player themselves: tap or click on yourself");
  ("walking it means stop here, and that falls out of walking to the tile they are already standing on: setting a walk off is what stops the one before it, and a way to your own tile is a way of no steps. so the tap goes the ordinary way and the machinery already there does the rest");
  ("this also keeps the menu from stepping in front of the one tile the Holy Spirit named. under discernment every tap but the guide tile is refused, and the player's own tile is not the guide tile - so a tap to stop while being led is answered by the dove, and the leading carries on. a menu opening ahead of that check would have walked straight round it");
  let walking = app_g_player_walking_is();
  let menu = clicked_on_player && not(walking);
  if (menu) {
    await app_g_menu_new(div_map);
  } else {
    await app_g_click_map(clicked_coordinates, player_img_c, div_map);
  }
}
