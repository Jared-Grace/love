import { numbers_up_to } from "./numbers_up_to.mjs";
import { week_calendar_day } from "./week_calendar_day.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { week_calendar_paint } from "./week_calendar_paint.mjs";
import { week_calendar_slot_row } from "./week_calendar_slot_row.mjs";
import { week_calendar_record_color } from "./week_calendar_record_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { week_range_label } from "./week_range_label.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { math_min } from "./math_min.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { math_max } from "./math_max.mjs";
import { week_calendar_range_add } from "./week_calendar_range_add.mjs";
import { week_calendar_endpoint_back_up } from "./week_calendar_endpoint_back_up.mjs";
import { week_calendar_far_anchor_set } from "./week_calendar_far_anchor_set.mjs";
import { not_equal } from "./not_equal.mjs";
import { week_calendar_anchor_click } from "./week_calendar_anchor_click.mjs";
import { week_calendar_selected_is } from "./week_calendar_selected_is.mjs";
export function week_calendar(parent, dates, initial_ranges, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; a chosen-windows list sits on top, then the grid; click a piece to start a range then click another piece to select every piece between them - on another day, the same hours on every day between, so a block of days is chosen in two clicks; click a selected piece to back up a step — the range collapses to a fresh anchor on its far end, ready to re-draw — then click that anchor again to clear it; reports the sorted windows to on_ranges after each change";
  let slots = numbers_up_to(48);
  let ranges = initial_ranges;
  let anchor = null;
  let r = week_calendar_day({
    parent,
    days: dates,
  });
  let grid = property_get(r, "grid");
  let summary = property_get(r, "summary");
  let records = property_get(r, "records");
  ("the rows are drawn here, after the frame is handed back, and not inside it: drawing one reads grid and records, which are not set until the frame returns.");
  each(slots, slot_row);
  week_calendar_paint(records, paint_record, summary, ranges, summary_line);
  function slot_row(slot) {
    let r2 = week_calendar_slot_row(slot, grid, cell_pressed, records, dates);
    return r2;
  }
  function paint_record(record) {
    let color = week_calendar_record_color(record, anchor, ranges);
    html_style_background_color_set(record.element, color);
  }
  function summary_line(span) {
    let text = week_range_label(span);
    app_shared_text_body(summary, text);
  }
  function range_add(day_a, day_b, a, b) {
    let i = dates.indexOf(day_a);
    let j = dates.indexOf(day_b);
    for (let k = math_min(i, j); less_than_equal(k, math_max(i, j)); k++) {
      let week_calendar_range_add_answer = week_calendar_range_add(
        dates[k],
        a,
        b,
        ranges,
      );
      ranges = property_get(week_calendar_range_add_answer, "ranges");
    }
  }
  function endpoint_back_up(day, slot) {
    let week_calendar_endpoint_back_up_answer = week_calendar_endpoint_back_up(
      day,
      slot,
      far_anchor_set,
      ranges,
    );
    ranges = property_get(week_calendar_endpoint_back_up_answer, "ranges");
  }
  function far_anchor_set(span, slot) {
    let week_calendar_far_anchor_set_answer = week_calendar_far_anchor_set(
      span,
      slot,
      anchor,
    );
    anchor = property_get(week_calendar_far_anchor_set_answer, "anchor");
  }
  function cell_pressed(day, slot) {
    "the list is repainted HERE, after the click has rebuilt it. Handing the windows to a helper before the click handed it the list from before: the grid repaints through paint_record, which reads the live list, but the 'Selected times' lines were written from the old one and named only some of the days just chosen.";
    if (not_equal(anchor, null)) {
      anchor_click(day, slot);
    } else {
      free_click(day, slot);
    }
    week_calendar_paint(records, paint_record, summary, ranges, summary_line);
  }
  function anchor_click(day, slot) {
    let week_calendar_anchor_click_answer = week_calendar_anchor_click(
      day,
      slot,
      anchor,
      range_add,
    );
    anchor = property_get(week_calendar_anchor_click_answer, "anchor");
    ("the windows are reported HERE, and not by the function that worked out where the anchor now stands. Drawing a range rebuilds the list rather than adding to it, so the list that function was handed is not this one; reporting from in there handed out the windows from before the range was drawn.");
    let ranges_changed = property_get(
      week_calendar_anchor_click_answer,
      "ranges_changed",
    );
    if (ranges_changed) {
      on_ranges(ranges);
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
