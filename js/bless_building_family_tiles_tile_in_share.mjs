import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { and } from "./and.mjs";
export function bless_building_family_tiles_tile_in_share(
  ground_is,
  alone_is,
  y_top,
  y_front,
  x_least,
  x_most,
) {
  "Works out the band of rows one family holds in a building, and hands back the test for whether a tile falls inside their share of it.";
  arguments_assert(arguments, 6);
  ("A family on the GROUND stops at the row its door is in. That row is the whole of what the ground floor shows, because its ceiling is the floor above and is drawn on top of it, and a family with somebody living upstairs therefore owns exactly one row. It reads as a thin stripe when it lights, and the answer to that is in how a share is drawn, not in giving the family a row of yard outside the house to stand on.");
  function y_least_get() {
    if (ground_is) {
      if (alone_is) {
        return y_top;
      }
      return y_front;
    }
    return y_top;
  }
  function y_most_get() {
    if (ground_is) {
      return y_front;
    }
    let below = subtract(y_front, 1);
    return below;
  }
  let y_least = y_least_get();
  let y_most = y_most_get();
  function tile_in_share(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let after = greater_than_equal(x, x_least);
    let before = less_than_equal(x, x_most);
    let below = greater_than_equal(y, y_least);
    let over = less_than_equal(y, y_most);
    let across = and(after, before);
    let down = and(below, over);
    let within = and(across, down);
    return within;
  }
  return tile_in_share;
}
