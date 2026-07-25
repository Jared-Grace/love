import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { week_day_names } from "./week_day_names.mjs";
import { slot_hour_label } from "./slot_hour_label.mjs";
import { week_range_label } from "./week_range_label.mjs";
import { week_range_sort_key } from "./week_range_sort_key.mjs";
import { week_calendar_color_anchor } from "./week_calendar_color_anchor.mjs";
import { week_calendar_color_empty } from "./week_calendar_color_empty.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_any } from "./list_any.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { not } from "./not.mjs";
export function week_calendar(parent, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; a chosen-windows list sits on top, then the grid; click a piece to start a range then click another piece in the same day to select every piece between them; click any selected piece to remove its range, or click a waiting piece again to cancel it; reports the sorted windows to on_ranges after each change";
  let days = week_day_names();
  let slots = numbers_up_to(48);
  let ranges = [];
  let anchor = null;
  let records = [];
  let root = app_shared_container_blue(parent);
  let heading = html_div_text(root, "Your available times");
  html_style_assign(heading, {
    "font-weight": "bold",
    "margin-bottom": "0.25rem",
  });
  let summary = html_div(root);
  html_style_assign(summary, {
    "margin-bottom": "0.75rem",
  });
  let grid = html_div(root);
  html_style_grid(grid, 8);
  html_div_text(grid, "");
  each(days, header_cell);
  each(slots, slot_row);
  paint();
  function header_cell(day) {
    let head = html_div_text(grid, day);
    html_style_assign(head, {
      "font-weight": "bold",
      "text-align": "center",
      padding: "0.2rem 0.4rem",
    });
  }
  function slot_row(slot) {
    let text = slot_hour_label(slot);
    let label = html_div_text(grid, text);
    app_shared_text_deemphasized(label);
    html_style_assign(label, {
      "font-size": "0.75rem",
      "text-align": "right",
      padding: "0 0.4rem",
    });
    function day_of_slot(day) {
      day_cell(day, slot);
    }
    each(days, day_of_slot);
  }
  function day_cell(day, slot) {
    let cell = html_div(grid);
    html_style_assign(cell, {
      width: "3.2rem",
      height: "1.9rem",
      border: "1px solid #e3e3e3",
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
  function range_covers(span, day, slot) {
    let same_day = equal(span.day, day);
    let after_start = greater_than_equal(slot, span.start);
    let before_end = less_than_equal(slot, span.end);
    let covers = same_day && after_start && before_end;
    return covers;
  }
  function selected_is(day, slot) {
    function in_range(span) {
      let r = range_covers(span, day, slot);
      return r;
    }
    let found = list_any(ranges, in_range);
    return found;
  }
  function anchor_is(day, slot) {
    let live = not_equal(anchor, null);
    let same = live && equal(anchor.day, day) && equal(anchor.slot, slot);
    return same;
  }
  function record_color(record) {
    let is_anchor = anchor_is(record.day, record.slot);
    let is_selected = selected_is(record.day, record.slot);
    let anchor_color = week_calendar_color_anchor();
    let selected_color = app_shared_container_blue_border_color();
    let empty_color = week_calendar_color_empty(record.slot);
    let chosen = is_anchor
      ? anchor_color
      : is_selected
        ? selected_color
        : empty_color;
    return chosen;
  }
  function paint_record(record) {
    let color = record_color(record);
    html_style_background_color_set(record.element, color);
  }
  function summary_line(span) {
    let text = week_range_label(span);
    app_shared_text_body(summary, text);
  }
  function summary_empty() {
    let none = app_shared_text_body(
      summary,
      "No times chosen yet — click a piece to start",
    );
    app_shared_text_deemphasized(none);
  }
  function render_summary() {
    html_clear(summary);
    let has = list_empty_not_is(ranges);
    if (has) {
      each(ranges, summary_line);
    } else {
      summary_empty();
    }
  }
  function paint() {
    each(records, paint_record);
    render_summary();
  }
  function range_add(day, a, b) {
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    list_add(ranges, {
      day: day,
      start: start,
      end: end,
    });
    list_sort_number_mapper(ranges, week_range_sort_key);
  }
  function range_remove(day, slot) {
    function keep(span) {
      let covers = range_covers(span, day, slot);
      let n = not(covers);
      return n;
    }
    ranges = list_filter(ranges, keep);
  }
  function cell_pressed(day, slot) {
    let has_anchor = not_equal(anchor, null);
    if (has_anchor) {
      anchor_click(day, slot);
    } else {
      free_click(day, slot);
    }
    paint();
  }
  function anchor_click(day, slot) {
    let same_piece = equal(anchor.day, day) && equal(anchor.slot, slot);
    let same_day = equal(anchor.day, day);
    if (same_piece) {
      anchor = null;
    } else if (same_day) {
      range_add(day, anchor.slot, slot);
      anchor = null;
      on_ranges(ranges);
    } else {
      anchor = {
        day: day,
        slot: slot,
      };
    }
  }
  function free_click(day, slot) {
    let selected = selected_is(day, slot);
    if (selected) {
      range_remove(day, slot);
      on_ranges(ranges);
    } else {
      anchor = {
        day: day,
        slot: slot,
      };
    }
  }
}
