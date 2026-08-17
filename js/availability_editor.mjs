import { property_get } from "./property_get.mjs";
import { availability_editor_preview_heading } from "./availability_editor_preview_heading.mjs";
import { availability_editor_grid_holder } from "./availability_editor_grid_holder.mjs";
import { availability_editor_line } from "./availability_editor_line.mjs";
import { availability_editor_render_grid } from "./availability_editor_render_grid.mjs";
import { availability_editor_render_preview } from "./availability_editor_render_preview.mjs";
import { availability_editor_highlight } from "./availability_editor_highlight.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { date_add_days } from "./date_add_days.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function availability_editor(parent) {
  "owner screen: pick a week with the arrows or the date field, select time ranges on that week's real dates, then choose how they repeat (daily, weekly, monthly, one time); the chosen button highlights and the preview refreshes to show the busy items that choice would create";
  let ranges = [];
  let r2 = availability_editor_grid_holder(parent, shift_week, on_jump);
  let r3 = availability_editor_preview_heading(r2, parent, choose);
  let preview_heading = property_get(r3, "preview_heading");
  let chosen = property_get(r3, "chosen");
  let week_start = property_get(r3, "week_start");
  let button_records = property_get(r3, "button_records");
  let week_label = property_get(r3, "week_label");
  let jump = property_get(r3, "jump");
  let grid_holder = property_get(r3, "grid_holder");
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
    let r = availability_editor_line(span, chosen, preview);
    return r;
  }
}
