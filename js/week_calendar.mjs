import { week_calendar_record_color } from "./week_calendar_record_color.mjs";
import { week_calendar_selected_is } from "./week_calendar_selected_is.mjs";
import { week_calendar_range_covers } from "./week_calendar_range_covers.mjs";
import { week_calendar_ranges_merged } from "./week_calendar_ranges_merged.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { date_month_day } from "./date_month_day.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { slot_hour_label } from "./slot_hour_label.mjs";
import { week_range_label } from "./week_range_label.mjs";
import { week_range_sort_key } from "./week_range_sort_key.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { not } from "./not.mjs";
export function week_calendar(parent, dates, initial_ranges, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; a chosen-windows list sits on top, then the grid; click a piece to start a range then click another piece in the same day to select every piece between them; click a selected piece to back up a step — the range collapses to a fresh anchor on its far end, ready to re-draw — then click that anchor again to clear it; reports the sorted windows to on_ranges after each change";
  let days = dates;
  let slots = numbers_up_to(48);
  let ranges = initial_ranges;
  let anchor = null;
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
  each(slots, slot_row);
  paint();
  function header_cell(day) {
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
  function paint_record(record) {
    let color = week_calendar_record_color(record, anchor, ranges);
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
    let start = math_min(a, b);
    let end = math_max(a, b);
    list_add(ranges, {
      day: day,
      start: start,
      end: end,
    });
    list_sort_number_mapper(ranges, week_range_sort_key);
    ranges = week_calendar_ranges_merged(ranges);
  }
  function endpoint_back_up(day, slot) {
    let next = [];
    function handle(span) {
      let covers = week_calendar_range_covers(span, day, slot);
      if (not(covers)) {
        list_add(next, span);
      } else {
        far_anchor_set(span, slot);
      }
    }
    each(ranges, handle);
    ranges = next;
  }
  function far_anchor_set(span, slot) {
    "backing up a step: drop the whole range and re-plant the anchor on its far end — the endpoint furthest from the clicked piece — so the next click re-draws the range from there; a lone one-piece range just clears";
    let single = equal(span.start, span.end);
    if (not(single)) {
      let distance_start = subtract(slot, span.start);
      let distance_end = subtract(span.end, slot);
      let far_first = greater_than_equal(distance_start, distance_end);
      let keep = far_first ? span.start : span.end;
      anchor = {
        day: span.day,
        slot: keep,
      };
    }
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
    let selected = week_calendar_selected_is(day, slot, ranges);
    if (selected) {
      endpoint_back_up(day, slot);
      on_ranges(ranges);
    } else {
      anchor = {
        day: day,
        slot: slot,
      };
    }
  }
}
