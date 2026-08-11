import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function week_calendar_day_cell(day, slot, grid, cell_pressed, records) {
  arguments_assert(arguments, 5);
  let cell = html_div(grid);
  let c = app_shared_color_gray_light();
  html_style_assign(cell, {
    height: "1.9rem",
    border: `1px solid ${c}`,
    "box-sizing": "border-box",
  });
  function on_press() {
    cell_pressed(day, slot);
  }
  html_on_click(cell, on_press);
  list_add(records, {
    day: day,
    slot: slot,
    element: cell,
  });
}
