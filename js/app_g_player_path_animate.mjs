import { app_g_day_followers_step } from "./app_g_day_followers_step.mjs";
import { g_path_steps } from "./g_path_steps.mjs";
import { each_async } from "./each_async.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
export async function app_g_player_path_animate(
  player,
  path,
  player_img_c,
  div_map,
) {
  let steps = g_path_steps(path);
  async function lambda(step) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let direction = g_direction(from, to);
    app_g_character_face(player, player_img_c, direction);
    ("the line walks with the player, one tile per tile, into the space the player is leaving. it is done HERE rather than once at the end of a tap because a line that teleported to the destination would not be a line");
    ("the tile being left is remembered FIRST and the line told to step second, because the line walks the remembered way - so a step that moved people before writing down where they were going would send each of them one tile short");
    app_g_day_trail_add(from);
    app_g_day_followers_step();
    await app_g_player_move_animate(to, player_img_c);
    app_g_player_center(to, player_img_c, div_map);
    await app_g_day_followers_settle();
  }
  await each_async(steps, lambda);
}
