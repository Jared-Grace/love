import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_offset_parent_corner } from "./html_component_offset_parent_corner.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { divide } from "./divide.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function html_grid_tile_center_origin(tile_component) {
  arguments_assert(arguments, 1);
  ("Where the middle of the grid's very first square sits inside the box that scrolls, in pixels.");
  ("The point every sum about this grid is really measured from. A square's coordinate names its place in the grid, but what a camera aims at and what a scroll lands on are both MIDDLES of squares - so every one of those sums begins by walking to the grid's corner and then half a square further in. Named once, that walk stops being a step each sum takes for itself.");
  ("Half a square, and not a whole one, because a coordinate counts squares from a corner while a camera points at a centre. Left as corners the picture sits half a square up and to the left of where it was asked to be, which on a phone is a visible amount of the screen.");
  ("It reads the width of a square as it is drawn right now rather than being told, because that is the number that moves: a camera changing how big the squares are moves this origin on every frame, and an origin worked out once would aim the whole grid at where it used to be.");
  let corner = html_component_offset_parent_corner(tile_component);
  let tile_size = html_element_width(tile_component);
  let half_tile = divide(tile_size, 2);
  let grid_left = property_get(corner, "left");
  let grid_top = property_get(corner, "top");
  let left = add(grid_left, half_tile);
  let top = add(grid_top, half_tile);
  let origin = {
    left,
    top,
  };
  return origin;
}
