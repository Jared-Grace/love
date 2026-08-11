import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function week_calendar_anchor_is(day, slot, anchor) {
  arguments_assert(arguments, 3);
  let live = not_equal(anchor, null);
  let same = live && equal(anchor.day, day) && equal(anchor.slot, slot);
  return same;
}
