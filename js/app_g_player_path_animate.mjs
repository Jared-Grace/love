import { list_skip_1 } from "./list_skip_1.mjs";
import { each_async } from "./each_async.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
export async function app_g_player_path_animate(path, player_img_c, div_map) {
  let steps = list_skip_1(path);
  async function lambda(step) {
    await app_g_player_move_animate(step, player_img_c);
    app_g_player_center(step, player_img_c, div_map);
  }
  await each_async(steps, lambda);
}
