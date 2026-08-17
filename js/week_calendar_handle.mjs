import { arguments_assert } from "./arguments_assert.mjs";
import { week_calendar_range_covers } from "./week_calendar_range_covers.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function week_calendar_handle(span, day, slot, next, far_anchor_set) {
  arguments_assert(arguments, 5);
  let covers = week_calendar_range_covers(span, day, slot);
  if (not(covers)) {
    list_add(next, span);
  } else {
    far_anchor_set(span, slot);
  }
}
