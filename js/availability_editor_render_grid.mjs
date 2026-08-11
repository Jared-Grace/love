import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { week_dates } from "./week_dates.mjs";
import { week_calendar } from "./week_calendar.mjs";
import { availability_editor_update_week_label } from "./availability_editor_update_week_label.mjs";
export function availability_editor_render_grid(
  grid_holder,
  week_start,
  ranges,
  on_grid_ranges,
  week_label,
) {
  arguments_assert(arguments, 5);
  html_clear(grid_holder);
  let dates = week_dates(week_start);
  week_calendar(grid_holder, dates, ranges, on_grid_ranges);
  availability_editor_update_week_label(dates, week_label);
}
