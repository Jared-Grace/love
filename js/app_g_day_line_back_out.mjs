import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_day_line_back_step } from "./app_g_day_line_back_step.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export async function app_g_day_line_back_out(
  player,
  to,
  player_img_c,
  div_map,
) {
  "back the procession down its own trail, one tile at a time, until the player can reach where they are going.";
  "Three ways it ends, and each one is the right place to stop. The player is standing on the tile they asked for - which is what tapping somebody in your own line means: walk back down the line to them. Or the way there is open again, so the rest of it is an ordinary walk and this hands it back. Or the trail has run out, and the day has not been walked far enough for there to be anywhere left to back into.";
  "The trail loses a tile every step, so this always ends. The count taken before the first step is that same trail's length, which is the most steps there could ever be.";
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  let most = list_size(trail);
  for (let index = 0; less_than(index, most); index++) {
    let arrived = g_coordinates_same_is(player, to);
    if (arrived) {
      return true;
    }
    let g = await app_g_game_save_get();
    let path = g_coordinates_path_shortest(g, player, to);
    let open = list_empty_not_is(path);
    if (open) {
      return true;
    }
    let stepped = await app_g_day_line_back_step(player, player_img_c, div_map);
    if (not(stepped)) {
      return false;
    }
  }
  return false;
}
