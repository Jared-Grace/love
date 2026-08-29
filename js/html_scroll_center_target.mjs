import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { property_get } from "./property_get.mjs";
import { html_grid_tile_center_origin } from "./html_grid_tile_center_origin.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function html_scroll_center_target(
  coordinates,
  tile_component,
  container,
) {
  arguments_assert(arguments, 3);
  ("Where a scrolling box would have to stand for one square of a grid inside it to sit in");
  ("the middle of the screen. It works the answer out and does not go there.");
  ("It is split from the scrolling so it can be asked more than once. A scroll animation");
  ("aims at one answer worked out at the start, which is right while nothing else moves -");
  ("but a camera that is changing how big the squares are is changing this answer on every");
  ("frame, and there the same sum has to be asked again each time.");
  ("Everything it reads is measured rather than remembered, for that same reason: the width");
  ("of a square as it is drawn right now, and where the grid currently sits inside the box.");
  ("Both of those move when the squares are resized.");
  let container_e = html_component_element_get(container);
  let tile_size = html_element_width(tile_component);
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  ("counted out from the middle of the grid's first square, which is where a coordinate of nothing points. That origin already carries the grid's own offset inside whatever scrolls, so a wrapper holding empty room around the grid is accounted for without anything here assuming it away.");
  let origin = html_grid_tile_center_origin(tile_component);
  let origin_left = property_get(origin, "left");
  let origin_top = property_get(origin, "top");
  let middle_left = multiply_add(x, tile_size, origin_left);
  let half_width = divide(container_e.clientWidth, 2);
  let left = subtract(middle_left, half_width);
  let middle_top = multiply_add(y, tile_size, origin_top);
  let half_height = divide(container_e.clientHeight, 2);
  let top = subtract(middle_top, half_height);
  let r = {
    left,
    top,
  };
  return r;
}
