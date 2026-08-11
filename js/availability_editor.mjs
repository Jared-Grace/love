import { availability_editor_render_grid } from "./availability_editor_render_grid.mjs";
import { availability_editor_add_button } from "./availability_editor_add_button.mjs";
import { availability_editor_render_preview } from "./availability_editor_render_preview.mjs";
import { availability_editor_highlight } from "./availability_editor_highlight.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { date_add_days } from "./date_add_days.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { html_on } from "./html_on.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { busy_item_build } from "./busy_item_build.mjs";
import { busy_item_label } from "./busy_item_label.mjs";
export function availability_editor(parent) {
  "owner screen: pick a week with the arrows or the date field, select time ranges on that week's real dates, then choose how they repeat (daily, weekly, monthly, one time); the chosen button highlights and the preview refreshes to show the busy items that choice would create";
  let ranges = [];
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
  let panel = app_shared_container_blue(parent);
  html_div_text(panel, "Repeat these times");
  availability_editor_add_button(
    "daily",
    "Daily",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "weekly",
    "Weekly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "monthly",
    "Monthly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "once",
    "One time",
    choose,
    panel,
    button_records,
  );
  let preview_heading = html_div_text(parent, "Busy times you'll add");
  html_style_assign(preview_heading, {
    "font-weight": "bold",
    "margin-top": "0.75rem",
  });
  let preview = html_div(parent);
  availability_editor_render_grid(
    grid_holder,
    week_start,
    ranges,
    on_grid_ranges,
    week_label,
  );
  availability_editor_render_preview(preview, ranges, chosen, line);
  function on_grid_ranges(new_ranges) {
    ranges = new_ranges;
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function shift_week(delta) {
    week_start = date_add_days(week_start, delta);
    availability_editor_render_grid(
      grid_holder,
      week_start,
      ranges,
      on_grid_ranges,
      week_label,
    );
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function on_jump() {
    let picked = html_value_get(jump);
    let ok = text_empty_not_is(picked);
    if (ok) {
      week_start = date_week_sunday(picked);
      availability_editor_render_grid(
        grid_holder,
        week_start,
        ranges,
        on_grid_ranges,
        week_label,
      );
      availability_editor_render_preview(preview, ranges, chosen, line);
    }
  }
  function choose(kind) {
    chosen = kind;
    availability_editor_highlight(chosen, button_records);
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function line(span) {
    let item = busy_item_build(chosen, span);
    let text = busy_item_label(item);
    app_shared_text_body(preview, text);
  }
}
