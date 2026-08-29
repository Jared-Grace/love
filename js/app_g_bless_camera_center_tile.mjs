import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_element_get } from "./app_shared_game_div_map_container_element_get.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { html_grid_tile_center_origin } from "./html_grid_tile_center_origin.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_bless_camera_center_tile(div_map, player_img_c) {
  arguments_assert(arguments, 2);
  ("Which square of the map is in the middle of the screen right now, counted in squares");
  ("and not rounded to one - the answer is usually somewhere between two of them.");
  ("It is the same sum as putting a square in the middle, read the other way round. That");
  ("one is given a square and asks where the box should stand; this is given where the box");
  ("stands and asks which square it is looking at. Both are measured from the same point -");
  ("the middle of the grid's first square - which is why that point is asked for by name");
  ("rather than walked to twice.");
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
  let origin = html_grid_tile_center_origin(player_img_c);
  let origin_left = property_get(origin, "left");
  let origin_top = property_get(origin, "top");
  let half_width = divide(container_e.clientWidth, 2);
  let middle_left = add(container_e.scrollLeft, half_width);
  let inside_left = subtract(middle_left, origin_left);
  let x = divide(inside_left, tile_size);
  let half_height = divide(container_e.clientHeight, 2);
  let middle_top = add(container_e.scrollTop, half_height);
  let inside_top = subtract(middle_top, origin_top);
  let y = divide(inside_top, tile_size);
  let r = {
    x,
    y,
  };
  return r;
}
