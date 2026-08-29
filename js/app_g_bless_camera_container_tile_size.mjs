import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_camera_container_tile_size(div_map, player_img_c) {
  "$plain div_map";
  "$plain player_img_c";
  arguments_assert(arguments, 2);
  ("The box the map scrolls inside, and how wide one square is being drawn at this moment. Every sum the camera does needs both of them and neither can be assumed.");
  ("The box is not the window. It can have room around the map inside it, and on a narrow phone the squares have already been shrunk to fit, so a camera that worked either number out from the window would be wrong on the device most people are holding. Both are read off what is actually on the screen instead.");
  ("The square is measured off the player's own tile rather than off the grid, because that tile is a drawn thing with a width the browser will tell you, and the grid's width is a sum nobody has finished.");
  let container = app_shared_game_div_map_container_get(div_map);
  let container_e = html_component_element_get(container);
  let rect = html_bounding_client_rect(player_img_c);
  let tile_size = property_get(rect, "width");
  let r = {
    container_e,
    tile_size,
  };
  return r;
}
