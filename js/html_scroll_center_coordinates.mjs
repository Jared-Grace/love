import { multiply_add } from "./multiply_add.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { html_scroll_animate } from "./html_scroll_animate.mjs";
export function html_scroll_center_coordinates(
  coordinates,
  tile_component,
  container,
) {
  let container_e = html_component_element_get(container);
  let rect = html_bounding_client_rect(tile_component);
  let tile_size = property_get(rect, "width");
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let half_tile = divide(tile_size, 2);
  ("a coordinate is counted from the GRID's own corner, which need not be the corner of what scrolls: a wrapper may hold empty room around the grid so the outermost tile can still reach the middle of the window. so the grid's offset inside the scroller is measured and added, rather than assumed to be nothing. the tile is positioned by the grid, so the grid is its offsetParent");
  let grid = tile_e_offset_parent();
  function tile_e_offset_parent() {
    let tile_e = html_component_element_get(tile_component);
    let parent = tile_e.offsetParent;
    return parent;
  }
  let grid_left = 0;
  let grid_top = 0;
  if (grid) {
    grid_left = grid.offsetLeft;
    grid_top = grid.offsetTop;
  }
  let right = multiply_add(x, tile_size, half_tile);
  let left3 = add(grid_left, right);
  let right2 = divide(container_e.clientWidth, 2);
  let left = subtract(left3, right2);
  let right3 = multiply_add(y, tile_size, half_tile);
  let left5 = add(grid_top, right3);
  let right4 = divide(container_e.clientHeight, 2);
  let top = subtract(left5, right4);
  let promise = html_scroll_animate(container_e, left, top);
  return promise;
}
