import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { week_calendar_render_summary } from "./week_calendar_render_summary.mjs";
export function week_calendar_paint(
  records,
  paint_record,
  summary,
  ranges,
  summary_line,
) {
  arguments_assert(arguments, 5);
  each(records, paint_record);
  week_calendar_render_summary(summary, ranges, summary_line);
}
