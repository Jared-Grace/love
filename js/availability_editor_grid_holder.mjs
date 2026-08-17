import { arguments_assert } from "./arguments_assert.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_on } from "./html_on.mjs";
export function availability_editor_grid_holder(parent, shift_week, on_jump) {
  arguments_assert(arguments, 3);
  let chosen = null;
  let iso = date_today_iso();
  let week_start = date_week_sunday(iso);
  let button_records = [];
  html_div_text(
    parent,
    "Mark the times you are busy — everything else stays open for booking",
  );
  let nav = app_shared_container_blue(parent);
  function go_prev() {
    shift_week(-7);
  }
  function go_next() {
    shift_week(7);
  }
  let week_row = html_div(nav);
  html_style_assign(week_row, {
    display: "flex",
    "align-items": "center",
    gap: "0.5rem",
  });
  app_shared_button(week_row, "◀", go_prev);
  let week_label = html_div_text(week_row, "");
  app_shared_button(week_row, "▶", go_next);
  html_div_text(nav, "Jump to any week");
  let jump = html_input_date(nav);
  app_shared_input_style(jump);
  html_on(jump, "change", on_jump);
  let grid_holder = html_div(parent);
  let r = {
    chosen,
    week_start,
    button_records,
    week_label,
    jump,
    grid_holder,
  };
  return r;
}
