import { html_scroll_center_coordinates } from "./html_scroll_center_coordinates.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
export function app_g_player_center(coordinates, player_img_c, div_map) {
  let container = app_shared_game_div_map_container_get(div_map);
  return html_scroll_center_coordinates(coordinates, player_img_c, container);
}
