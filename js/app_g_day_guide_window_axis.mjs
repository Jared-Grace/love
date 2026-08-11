import { arguments_assert } from "./arguments_assert.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { negative } from "./negative.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
export function app_g_day_guide_window_axis(
  player_at,
  tile,
  view_length,
  grid_inset,
  content_length,
  trim,
) {
  "PURE: one axis of the tile window that will be FULLY visible once the map has finished centring on the player, as the first and last whole tile along that axis.";
  "Across and down were written out twice and differed in one word - the bar, which eats the bottom edge and nothing else. Two copies of an arithmetic nobody can check by looking is the shape a fault hides in, so the difference is a parameter now: trim is how much of the far end is covered by something the player cannot see past, and it is nothing at all on the horizontal.";
  "The scroll offset is PREDICTED here rather than read off the page. The guide is drawn the instant the player lands, while the centring scroll is still animating, so the live scroll position is a half-finished number and a window built from it trails behind the player - which is what put the gold on a tile nearby instead of at the far edge of what the player is about to see. So it recomputes the very number the browser is at that moment scrolling to: the grid's own inset plus the player's tile centre, less half the view, held between nothing and the far edge of the content the way the browser holds it.";
  "Everything is measured from where tile zero actually SITS. The grid of tiles is inset inside the scrolled content by a wide margin - the room that lets the map centre on a player standing at the very edge - so the scroll offset is not the first visible tile's position, and taking one for the other landed the window eight tiles right and nine tiles down of the truth, with the player himself outside it and no tile ever in view.";
  "Fully visible means fully: a tile that starts before the near edge is not counted, hence ceiling on the near side, and a tile that runs past the far edge is not counted either, hence floor and one back.";
  arguments_assert(arguments, 6);
  let player_centre = add(player_at, 0.5);
  let into = multiply(player_centre, tile);
  let centre = add(grid_inset, into);
  let middle = divide(view_length, 2);
  let wanted = subtract(centre, middle);
  let furthest = subtract(content_length, view_length);
  let held = math_min(wanted, furthest);
  let scrolled = math_max(0, held);
  let origin = subtract(grid_inset, scrolled);
  let before = negative(origin);
  let tile_first = divide_ceil(before, tile);
  let reaches = subtract(view_length, origin);
  let usable = subtract(reaches, trim);
  let past = divide_floor(usable, tile);
  let tile_last = subtract(past, 1);
  let r = {
    first: tile_first,
    last: tile_last,
  };
  return r;
}
