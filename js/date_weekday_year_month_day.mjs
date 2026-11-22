import { arguments_assert } from "./arguments_assert.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
export function date_weekday_year_month_day(iso) {
  "$plain iso";
  "A 'YYYY-MM-DD' date with its short weekday in front, then year, short month and day, like 'Thu 2026 Sept 24'.";
  arguments_assert(arguments, 1);
  let label = date_weekday_short(iso) + " " + date_year_month_day(iso);
  return label;
}
