import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { week_calendar_paint } from "./week_calendar_paint.mjs";
export function week_calendar_cell_pressed(
  day,
  slot,
  anchor,
  anchor_click,
  free_click,
  records,
  paint_record,
  summary,
  ranges,
  summary_line,
) {
  arguments_assert(arguments, 10);
  let has_anchor = not_equal(anchor, null);
  if (has_anchor) {
    anchor_click(day, slot);
  } else {
    free_click(day, slot);
  }
  week_calendar_paint(records, paint_record, summary, ranges, summary_line);
}
