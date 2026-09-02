import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_element_get } from "./app_shared_game_div_map_container_element_get.mjs";
import { html_scroll_centered_coordinates_element } from "./html_scroll_centered_coordinates_element.mjs";
export function app_g_bless_camera_center_tile(div_map, player_img_c) {
  arguments_assert(arguments, 2);
  ("Which square of the map is in the middle of the screen right now, counted in squares");
  ("and not rounded to one - the answer is usually somewhere between two of them.");
  ("It exists so a camera can change how big the squares are without appearing to travel.");
  ("Squares grow away from the corner of the grid, so a map redrawn larger slides");
  ("everything the player was looking at off towards the bottom right unless the box is");
  ("moved to compensate. Asked before the change and aimed at afterwards, this is what");
  ("holds the picture still while only its size moves.");
  ("The sum is one name along and is shared with every other scrolling grid. All this side");
  ("does is find the map's own scrolling box, which is the only thing about it that is a");
  ("game's business rather than a grid's.");
  let container_e = app_shared_game_div_map_container_element_get(div_map);
  let r = html_scroll_centered_coordinates_element(container_e, player_img_c);
  return r;
}
