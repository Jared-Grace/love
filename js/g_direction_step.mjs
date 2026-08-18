import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function g_direction_step(direction) {
  arguments_assert(arguments, 1);
  ("One step taken in one of the four facings, as the change it makes to a tile's x and y.");
  ("The signs are the ones ",
    fn_name("g_direction"),
    " reads back off a move, so a step taken here and the");
  ("facing named there can never disagree - south adds to y, because the grid's y grows the");
  ("way the rows are drawn, downward.");
  if (equal(direction, "north")) {
    let north = {
      x: 0,
      y: -1,
    };
    return north;
  }
  if (equal(direction, "south")) {
    let south = {
      x: 0,
      y: 1,
    };
    return south;
  }
  if (equal(direction, "east")) {
    let east = {
      x: 1,
      y: 0,
    };
    return east;
  }
  let west = {
    x: -1,
    y: 0,
  };
  return west;
}
