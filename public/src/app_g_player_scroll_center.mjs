import { html_scroll_center_container_now } from "../../../love/public/src/html_scroll_center_container_now.mjs";
import { html_on_load_wait } from "../../../love/public/src/html_on_load_wait.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_g_player_scroll_center(div_map, player_img_c) {
  let container = property_get(div_map, "container");
  await html_on_load_wait();
  await html_scroll_center_container_now(player_img_c, container);
}
