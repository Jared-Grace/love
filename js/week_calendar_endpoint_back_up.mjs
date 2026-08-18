import { arguments_assert } from "./arguments_assert.mjs";
import { week_calendar_handle } from "./week_calendar_handle.mjs";
import { each } from "./each.mjs";
export function week_calendar_endpoint_back_up(
  day,
  slot,
  far_anchor_set,
  ranges,
) {
  arguments_assert(arguments, 4);
  let next = [];
  function handle(span) {
    let r = week_calendar_handle(span, day, slot, next, far_anchor_set);
    return r;
  }
  each(ranges, handle);
  ranges = next;
  let r5 = {
    ranges,
  };
  return r5;
}
