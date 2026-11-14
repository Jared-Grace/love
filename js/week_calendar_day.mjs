import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { week_calendar_header_cell_weekly } from "./week_calendar_header_cell_weekly.mjs";
import { week_calendar_header_cell } from "./week_calendar_header_cell.mjs";
export function week_calendar_day({ parent, days, weekly }) {
  arguments_assert(arguments, 1);
  let records = [];
  let root = app_shared_container_blue(parent);
  let heading = html_div_text(root, "Selected times");
  html_style_assign(heading, {
    "font-weight": "bold",
    "margin-bottom": "0.25rem",
  });
  let summary = html_div(root);
  html_style_assign(summary, {
    "margin-bottom": "0.75rem",
  });
  let grid = html_div(root);
  html_style_assign(grid, {
    display: "grid",
    width: "100%",
    "grid-template-columns": "auto repeat(7, 1fr)",
    gap: "0",
  });
  html_div_text(grid, "");
  each(days, header_cell);
  function header_cell(day) {
    if (weekly) {
      week_calendar_header_cell_weekly(day, grid);
    } else {
      week_calendar_header_cell(day, grid);
    }
  }
  let r = {
    records,
    summary,
    grid,
  };
  return r;
}
