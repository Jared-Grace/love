import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { html_grid_tile_center_origin } from "./html_grid_tile_center_origin.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function html_scroll_centered_coordinates(tile_component, container) {
  arguments_assert(arguments, 2);
  ("Which square of the grid is in the middle of the scrolling box right now, counted in");
  ("squares and allowed a fraction of one.");
  ("The exact opposite of the sum that works out where the box has to stand for a named");
  ("square to be in the middle, run backwards from where the box actually stands. It is");
  ("written from the same three measurements as that one - half the box, where the middle of");
  ("the first square sits, and how wide a square is drawn right now - so the two cannot");
  ("drift apart into different ideas of where the middle is.");
  ("FRACTIONAL, because a box almost never stands exactly on a square. One that has been");
  ("dragged, or stopped part way through a journey somebody else took over, is between");
  ("squares, and rounding to the nearest would begin the next journey with a jump of up to");
  ("half a square.");
  ("Everything is measured rather than remembered, for the same reason the forward sum");
  ("measures: a camera that is changing how big the squares are changes this answer on every");
  ("frame.");
  let container_e = html_component_element_get(container);
  let tile_size = html_element_width(tile_component);
  let origin = html_grid_tile_center_origin(tile_component);
  let origin_left = property_get(origin, "left");
  let origin_top = property_get(origin, "top");
  let half_width = divide(container_e.clientWidth, 2);
  let middle_left = add(container_e.scrollLeft, half_width);
  let across = subtract(middle_left, origin_left);
  let x = divide(across, tile_size);
  let half_height = divide(container_e.clientHeight, 2);
  let middle_top = add(container_e.scrollTop, half_height);
  let down = subtract(middle_top, origin_top);
  let y = divide(down, tile_size);
  let coordinates = {
    x,
    y,
  };
  return coordinates;
}
