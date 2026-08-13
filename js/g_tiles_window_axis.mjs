import { arguments_assert } from "./arguments_assert.mjs";
import { negative } from "./negative.mjs";
import { subtract } from "./subtract.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
export function g_tiles_window_axis(
  scrolled,
  tile,
  view_length,
  grid_inset,
  trim,
) {
  "PURE: one axis of the tile window that is FULLY visible when the map is scrolled to a given offset, as the first and last whole tile along that axis.";
  "Everything is measured from where tile zero actually SITS. The grid of tiles is inset inside the scrolled content by a wide margin - the room that lets the map centre on a player standing at the very edge - so the scroll offset is not the first visible tile's position, and taking one for the other landed the window eight tiles right and nine tiles down of the truth, with the player himself outside it and no tile ever in view.";
  "Fully visible means fully: a tile that starts before the near edge is not counted, hence ceiling on the near side, and a tile that runs past the far edge is not counted either, hence floor and one back.";
  "trim is how much of the far end is covered by something the player cannot see past - a bar across the bottom of the map eats the last row, and nothing eats anything on the horizontal.";
  "the offset is RECEIVED rather than read or guessed, and that is the whole reason this is its own name: one caller predicts the offset the browser is still scrolling to, and another reads the offset the map is actually sitting at, and the window over an offset is the same arithmetic either way.";
  "nothing is clamped to the size of the map, so an answer may name a tile that does not exist. that is correct here and both callers rely on it: each of them is asking whether some real tile is inside the window, never asking the window to hand them a tile.";
  arguments_assert(arguments, 5);
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
