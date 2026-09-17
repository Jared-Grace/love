import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
export function bless_person_turn_quarters(facing, direction) {
  arguments_assert(arguments, 2);
  ("How big a turn is, in quarter turns: none to stay facing the same way, one to face a side, two to face right about.");
  ("People on the street only ever face the four ways their pictures are drawn for, so these three are the only answers there are.");
  let quarters = 1;
  let same = equal(facing, direction);
  if (same) {
    quarters = 0;
  }
  let back = g_direction_opposite(facing);
  let about = equal(direction, back);
  if (about) {
    quarters = 2;
  }
  return quarters;
}
