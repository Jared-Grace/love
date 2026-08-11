import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { negative } from "./negative.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
export function app_g_day_guide_window(player, tile, viewport, grid, content) {
  "PURE (no DOM): which tiles will be FULLY visible once the map has finished centring on the player, as the window [min_x..max_x, min_y..max_y] the gold guide is allowed to choose from.";
  "The scroll offset is PREDICTED here rather than read off the page, and that is the whole reason this is worth having on its own. The guide is drawn the instant the player lands, while the centring scroll is still animating, so the live scroll position is a half-finished number and a window built from it trails behind the player - which is what put the gold on a tile nearby instead of at the far edge of what the player is about to see. So it recomputes the very number the browser is at that moment scrolling to: the grid's own offset plus the player's tile centre, less half the viewport, held between nothing and the far edge of the content the way the browser holds it.";
  "Everything is measured from where tile (0,0) actually SITS. The grid of tiles is inset inside the scrolled content by a wide margin - the room that lets the map centre on a player standing at the very edge - so the scroll offset is not the first visible tile's position, and taking one for the other landed the window eight tiles right and nine tiles down of the truth, with the player himself outside it and no tile ever in view.";
  "Fully visible means fully: a tile that starts before the left edge is not counted, hence ceiling on the near side, and a tile that runs past the far edge is not counted either, hence floor and one back. The bottom edge stops short by the height of the bar, so a tile is never offered from underneath it.";
  arguments_assert(arguments, 5);
  let player_x = property_get(player, "x");
  let player_y = property_get(player, "y");
  let view_width = property_get(viewport, "width");
  let view_height = property_get(viewport, "height");
  let bar_height = property_get(viewport, "bar");
  let grid_left = property_get(grid, "left");
  let grid_top = property_get(grid, "top");
  let content_width = property_get(content, "width");
  let content_height = property_get(content, "height");
  let left = add(player_x, 0.5);
  let right = multiply(left, tile);
  let centre_x = add(grid_left, right);
  let left2 = add(player_y, 0.5);
  let right2 = multiply(left2, tile);
  let centre_y = add(grid_top, right2);
  let right3 = divide(view_width, 2);
  let wanted_x = subtract(centre_x, right3);
  let right4 = divide(view_height, 2);
  let wanted_y = subtract(centre_y, right4);
  let furthest_x = subtract(content_width, view_width);
  let furthest_y = subtract(content_height, view_height);
  let held_x = math_min(wanted_x, furthest_x);
  let held_y = math_min(wanted_y, furthest_y);
  let scrolled_x = math_max(0, held_x);
  let scrolled_y = math_max(0, held_y);
  let origin_x = subtract(grid_left, scrolled_x);
  let origin_y = subtract(grid_top, scrolled_y);
  let number = negative(origin_x);
  let min_x = divide_ceil(number, tile);
  let number2 = negative(origin_y);
  let min_y = divide_ceil(number2, tile);
  let number3 = subtract(view_width, origin_x);
  let past_right = divide_floor(number3, tile);
  let max_x = subtract(past_right, 1);
  let left3 = subtract(view_height, origin_y);
  let above_bar = subtract(left3, bar_height);
  let past_bottom = divide_floor(above_bar, tile);
  let max_y = subtract(past_bottom, 1);
  let r = {
    min_x,
    max_x,
    min_y,
    max_y,
  };
  return r;
}
