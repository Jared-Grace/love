import { g_path_steps } from "./g_path_steps.mjs";
import { each_async } from "./each_async.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_player_face } from "./app_g_player_face.mjs";
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
    app_g_player_face(player, player_img_c, direction);
    await app_g_player_move_animate(to, player_img_c);
    app_g_player_center(to, player_img_c, div_map);
  }
  await each_async(steps, lambda);
}
