import { html_scroll_center_container_now } from "./html_scroll_center_container_now.mjs";
import { html_img_load_wait } from "./html_img_load_wait.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_player_scroll_center(div_map, player_img_c) {
  let container = property_get(div_map, "container");
  await html_img_load_wait(player_img_c);
  await html_scroll_center_container_now(player_img_c, container);
}
