import { app_shared_game_div_map_container_element_get } from "./app_shared_game_div_map_container_element_get.mjs";
import { html_scroll_settled } from "./html_scroll_settled.mjs";
export async function app_g_map_scroll_settled(div_map) {
  let element = app_shared_game_div_map_container_element_get(div_map);
  await html_scroll_settled(element);
}
