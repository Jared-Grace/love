import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { property_get } from "./property_get.mjs";
export function bless_tiles_hold(tiles, x, y) {
  arguments_assert(arguments, 3);
  ("Whether a place covers the tile named - asked of the tile list a place IS, so it answers");
  ("for a street, a block and a city without any of them needing a kind of its own.");
  ("A renderer asks this to know what ground to draw, and the brain asks it to know what a");
  ("prayer is covering, which is what keeps the two agreeing about where a street is.");
  function lambda$tile(tile) {
    let left2 = property_get(tile, "x");
    let left = equal(left2, x);
    let left3 = property_get(tile, "y");
    let right = equal(left3, y);
    let same = and(left, right);
    return same;
  }
  let count = list_filter_size(tiles, lambda$tile);
  let held = greater_than(count, 0);
  return held;
}
