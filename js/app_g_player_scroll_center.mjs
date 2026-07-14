import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { html_on_load_wait } from "./html_on_load_wait.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
export async function app_g_player_scroll_center(div_map, player_img_c) {
  await html_on_load_wait();
  await html_request_animation_frame();
  let player = await app_g_player_get();
  app_g_player_center(player, player_img_c, div_map);
}
