import { property_list_size } from "./property_list_size.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { property_set } from "./property_set.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_day_followers_step } from "./app_g_day_followers_step.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_day_followers_settle } from "./app_g_day_followers_settle.mjs";
import { not } from "./not.mjs";
export async function app_g_day_line_back_step(player, player_img_c, div_map) {
  "walk the whole procession one tile BACKWARDS down its own trail: the player steps into the tile behind them, and everybody in the line steps into the tile behind the person they were following.";
  "It is the same walk as going forward, read the other way. Going forward, each person moves up onto the tile the one ahead has left; going back, each person moves down onto the tile the one behind them is leaving. So the trail simply loses its newest tile - the one the player is stepping into - and everybody is where the trail says they should be again, one place further down it. Nobody ever shares a tile and nobody walks through anybody.";
  "The one thing it needs is a spare tile of trail past the end of the line, or the person at the back has nowhere to go. Without that spare there is no way to back up at all, which is the case where the day simply has not been walked far enough yet to have left room.";
  "It has to face the player before moving them, because which way they are facing is worked out from where they are standing and where they are going - and afterwards those are the same tile.";
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  let line = property_list_size(state, "followers");
  let room = list_size_greater_than(trail, line);
  if (not(room)) {
    return false;
  }
  let to = list_first(trail);
  let remaining = list_skip_1(trail);
  property_set(state, "trail", remaining);
  let direction = g_direction(player, to);
  app_g_character_face(player, player_img_c, direction);
  app_g_day_followers_step();
  object_assign(player, to);
  await app_g_player_move_animate(to, player_img_c);
  app_g_player_center(to, player_img_c, div_map);
  await app_g_day_followers_settle();
  return true;
}
