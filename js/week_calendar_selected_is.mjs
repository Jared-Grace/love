import { arguments_assert } from "./arguments_assert.mjs";
import { week_calendar_range_covers } from "./week_calendar_range_covers.mjs";
import { list_any } from "./list_any.mjs";
export function week_calendar_selected_is(day, slot, ranges) {
  arguments_assert(arguments, 3);
  function in_range(span) {
    let r = week_calendar_range_covers(span, day, slot);
    return r;
  }
  let found = list_any(ranges, in_range);
  return found;
}
