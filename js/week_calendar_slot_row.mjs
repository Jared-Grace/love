import { arguments_assert } from "./arguments_assert.mjs";
import { slot_hour_label } from "./slot_hour_label.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { week_calendar_day_cell } from "./week_calendar_day_cell.mjs";
import { each } from "./each.mjs";
export function week_calendar_slot_row(
  slot,
  grid,
  cell_pressed,
  records,
  days,
) {
  arguments_assert(arguments, 5);
  let text = slot_hour_label(slot);
  let label = html_div_text(grid, text);
  app_shared_text_deemphasized(label);
  html_style_assign(label, {
    "font-size": "0.75rem",
    "text-align": "right",
    padding: "0 0.4rem",
  });
  function day_of_slot(day) {
    week_calendar_day_cell(day, slot, grid, cell_pressed, records);
  }
  each(days, day_of_slot);
}
