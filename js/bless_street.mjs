import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { g_direction_step } from "./g_direction_step.mjs";
export function bless_street(x, y, direction, length) {
  arguments_assert(arguments, 4);
  ("A street, given as the tiles it covers - a straight run beginning at the tile named and");
  ("going the way named, that many tiles long.");
  ("A place in this game is only ever the tiles it covers, so a street needs no kind of its");
  ("own. What makes this one a street rather than a block is the shape built here, and the");
  ("rungs above it are the same idea with more tiles - which is why the ladder gains no new");
  ("rule as it climbs.");
  let step = g_direction_step(direction);
  let step_x = property_get(step, "x");
  let step_y = property_get(step, "y");
  let along = range(length);
  function lambda$i(i) {
    let across = multiply(step_x, i);
    let down = multiply(step_y, i);
    let tile = {
      x: add(x, across),
      y: add(y, down),
    };
    return tile;
  }
  let tiles = list_map(along, lambda$i);
  return tiles;
}
