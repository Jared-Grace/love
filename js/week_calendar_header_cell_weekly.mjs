import { arguments_assert } from "./arguments_assert.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function week_calendar_header_cell_weekly(day, grid) {
  arguments_assert(arguments, 2);
  ("a column heading for a weekly schedule: the weekday alone, no date, because the hours come back every week");
  let text = date_weekday_short(day);
  let head = html_div_text(grid, text);
  html_style_assign(head, {
    "font-weight": "bold",
    "text-align": "center",
    padding: "0.2rem 0.3rem",
    "font-size": "0.8rem",
  });
}
