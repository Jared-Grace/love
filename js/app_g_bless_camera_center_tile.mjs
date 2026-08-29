import { html_element_width } from "./html_element_width.mjs";
import { app_shared_game_div_map_container_element_get } from "./app_shared_game_div_map_container_element_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_bless_camera_center_tile(div_map, player_img_c) {
  arguments_assert(arguments, 2);
  ("Which square of the map is in the middle of the screen right now, counted in squares");
  ("and not rounded to one - the answer is usually somewhere between two of them.");
  ("It is the same sum as putting a square in the middle, read the other way round. That");
  ("one is given a square and asks where the box should stand; this is given where the box");
  ("stands and asks which square it is looking at.");
  ("It exists so a camera can change how big the squares are without appearing to travel.");
  ("Squares grow away from the corner of the grid, so a map redrawn larger slides");
  ("everything the player was looking at off towards the bottom right unless the box is");
  ("moved to compensate. Asked before the change and aimed at afterwards, this is what");
  ("holds the picture still while only its size moves.");
  ("Not rounded, because rounding is a jump. Half a square is easily enough to be seen on");
  ("a phone, and a zoom that also nudged sideways by half a square would look like a");
  ("camera that could not make up its mind.");
  let container_e = app_shared_game_div_map_container_element_get(div_map);
  let tile_size = html_element_width(player_img_c);
  let half_tile = divide(tile_size, 2);
  let grid = tile_e_offset_parent();
  function tile_e_offset_parent() {
    let tile_e = html_component_element_get(player_img_c);
    let parent = tile_e.offsetParent;
    return parent;
  }
  let grid_left = 0;
  let grid_top = 0;
  if (grid) {
    grid_left = grid.offsetLeft;
    grid_top = grid.offsetTop;
  }
  let half_width = divide(container_e.clientWidth, 2);
  let middle_left = add(container_e.scrollLeft, half_width);
  let inside_left = subtract(middle_left, grid_left);
  let corner_left = subtract(inside_left, half_tile);
  let x = divide(corner_left, tile_size);
  let half_height = divide(container_e.clientHeight, 2);
  let middle_top = add(container_e.scrollTop, half_height);
  let inside_top = subtract(middle_top, grid_top);
  let corner_top = subtract(inside_top, half_tile);
  let y = divide(corner_top, tile_size);
  let r = {
    x,
    y,
  };
  return r;
}
