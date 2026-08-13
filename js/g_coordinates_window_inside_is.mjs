import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function g_coordinates_window_inside_is(coordinates, window_tiles) {
  "whether a tile falls inside a window of tiles - both edges counted as in, because a window is named by the first and last tile it holds rather than by the gap outside them.";
  "the window is not called `window` here, and must not be: that word already names the page's own browser object everywhere in this repo, and a local wearing it hides the real one from every line underneath.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let min_x = property_get(window_tiles, "min_x");
  let max_x = property_get(window_tiles, "max_x");
  let min_y = property_get(window_tiles, "min_y");
  let max_y = property_get(window_tiles, "max_y");
  let inside =
    greater_than_equal(x, min_x) &&
    less_than_equal(x, max_x) &&
    greater_than_equal(y, min_y) &&
    less_than_equal(y, max_y);
  return inside;
}
