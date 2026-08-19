import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
export function bless_tiles_hold(tiles, x, y) {
  arguments_assert(arguments, 3);
  ("Whether a place covers the tile named - asked of the tile list a place IS, so it answers");
  ("for a street, a block and a city without any of them needing a kind of its own.");
  ("A renderer asks this to know what ground to draw, and the brain asks it to know what a");
  ("prayer is covering, which is what keeps the two agreeing about where a street is.");
  function lambda$tile(tile) {
    let left = property_equals(tile, "x", x);
    let right = property_equals(tile, "y", y);
    let same = and(left, right);
    return same;
  }
  let count = list_filter_size(tiles, lambda$tile);
  let held = greater_than(count, 0);
  return held;
}
