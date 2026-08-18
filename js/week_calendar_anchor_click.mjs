import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function week_calendar_anchor_click(
  day,
  slot,
  anchor,
  range_add,
  on_ranges,
  ranges,
) {
  arguments_assert(arguments, 6);
  let same_piece = equal(anchor.day, day) && equal(anchor.slot, slot);
  let same_day = equal(anchor.day, day);
  if (same_piece) {
    anchor = null;
  } else if (same_day) {
    range_add(day, anchor.slot, slot);
    anchor = null;
    on_ranges(ranges);
  } else {
    anchor = {
      day: day,
      slot: slot,
    };
  }
  let r = {
    anchor,
  };
  return r;
}
