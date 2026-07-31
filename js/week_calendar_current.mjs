import { arguments_assert } from "./arguments_assert.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { week_dates } from "./week_dates.mjs";
import { week_calendar } from "./week_calendar.mjs";
export function week_calendar_current(parent, initial, on_ranges) {
  arguments_assert(arguments, 3);
  ("Show the weekly grid for the week today falls in.");
  ("Every caller of the grid wants this week - the owner choosing when they can");
  ("preach, and the sandbox previewing the same grid - so all of them worked out");
  ("today, then which Sunday began it, then that week's dates, before handing the");
  ("grid the same three things it always gets.");
  ("Which week is shown is not what a caller of a weekly calendar is deciding, so");
  ("it is decided once here. A caller wanting some other week wants the grid");
  ("itself, which still takes the dates.");
  let iso = date_today_iso();
  let sunday = date_week_sunday(iso);
  let dates = week_dates(sunday);
  week_calendar(parent, dates, initial, on_ranges);
}
