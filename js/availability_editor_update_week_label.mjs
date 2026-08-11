import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { date_year } from "./date_year.mjs";
import { equal } from "./equal.mjs";
import { date_month_day } from "./date_month_day.mjs";
import { date_month_day_year } from "./date_month_day_year.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function availability_editor_update_week_label(dates, week_label) {
  arguments_assert(arguments, 2);
  let first = list_first(dates);
  let last = list_last(dates);
  let left = date_year(first);
  let right = date_year(last);
  let same_year = equal(left, right);
  let start_label = same_year
    ? date_month_day(first)
    : date_month_day_year(first);
  let end_label = date_month_day_year(last);
  let text = text_combine_multiple([
    "Week of: ",
    start_label,
    " – ",
    end_label,
  ]);
  html_text_set(week_label, text);
}
