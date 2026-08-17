import { arguments_assert } from "./arguments_assert.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { date_month_day } from "./date_month_day.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function week_calendar_header_cell(day, grid) {
  arguments_assert(arguments, 2);
  let weekday = date_weekday_short(day);
  let month_day = date_month_day(day);
  let text = text_combine_multiple([weekday, " ", month_day]);
  let head = html_div_text(grid, text);
  html_style_assign(head, {
    "font-weight": "bold",
    "text-align": "center",
    padding: "0.2rem 0.3rem",
    "font-size": "0.8rem",
  });
}
