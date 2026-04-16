import { html_scroll_center_container } from "../../../love/public/src/html_scroll_center_container.mjs";
import { app_g_div_map_container_get } from "../../../love/public/src/app_g_div_map_container_get.mjs";
export async function app_g_player_center(div_map, player_img_c) {
  let container = app_g_div_map_container_get(div_map);
  await html_scroll_center_container(player_img_c, container);
}
