import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_clear } from "./app_g_day_guide_clear.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_coordinates_update_move } from "./app_g_player_coordinates_update_move.mjs";
import { g_coordinates_water_is } from "./g_coordinates_water_is.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { g_coordinates_clicked_adjascent_nearest_player } from "./g_coordinates_clicked_adjascent_nearest_player.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function app_g_day_water_tap_if(clicked, player_img_c, div_map) {
  "tapping the water the day has been led to WALKS THE GROUP TO ITS EDGE and ends the leading - and says so, by handing back true, so the tap goes no further";
  "nobody can stand on water, so the tap stops on the nearest land tile beside it, the same way a tap on a person stops beside the person. that is what the day's own words asked for: a water tile to get to, and land tiles chosen to get there";
  "the line comes too, because the walk itself is what carries it - every tile the player takes is a tile each follower takes after them";
  "false for every other tap, including a tap on water on a day that was never led there, so this is safe to ask of the shared map tap before anything else looks at what was clicked";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  let missing = null_is(target);
  if (missing) {
    return false;
  }
  let water = g_coordinates_water_is(target);
  if (not(water)) {
    return false;
  }
  let same = g_coordinates_same_is(clicked, target);
  if (not(same)) {
    return false;
  }
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  let shore = g_coordinates_clicked_adjascent_nearest_player(g, player, target);
  await app_g_player_coordinates_update_move(
    false,
    shore,
    player_img_c,
    div_map,
  );
  property_set(state, "target", null);
  app_g_day_guide_clear();
  return true;
}
