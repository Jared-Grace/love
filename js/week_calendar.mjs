import { week_calendar_range_add } from "./week_calendar_range_add.mjs";
import { property_get } from "./property_get.mjs";
import { week_calendar_day } from "./week_calendar_day.mjs";
import { week_calendar_handle } from "./week_calendar_handle.mjs";
import { week_calendar_cell_pressed } from "./week_calendar_cell_pressed.mjs";
import { week_calendar_slot_row } from "./week_calendar_slot_row.mjs";
import { week_calendar_record_color } from "./week_calendar_record_color.mjs";
import { week_calendar_selected_is } from "./week_calendar_selected_is.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { week_range_label } from "./week_range_label.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function week_calendar(parent, dates, initial_ranges, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; a chosen-windows list sits on top, then the grid; click a piece to start a range then click another piece in the same day to select every piece between them; click a selected piece to back up a step — the range collapses to a fresh anchor on its far end, ready to re-draw — then click that anchor again to clear it; reports the sorted windows to on_ranges after each change";
  let days = dates;
  let slots = numbers_up_to(48);
  let ranges = initial_ranges;
  let anchor = null;
  let r = week_calendar_day(
    parent,
    days,
    slots,
    slot_row,
    paint_record,
    ranges,
    summary_line,
  );
  let grid = property_get(r, "grid");
  let summary = property_get(r, "summary");
  let records = property_get(r, "records");
  function slot_row(slot) {
    let r2 = week_calendar_slot_row(slot, grid, cell_pressed, records, days);
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
  function range_add(day, a, b) {
    let week_calendar_range_add_answer = week_calendar_range_add(
      day,
      a,
      b,
      ranges,
    );
    ranges = property_get(week_calendar_range_add_answer, "ranges");
  }
  function endpoint_back_up(day, slot) {
    let next = [];
    function handle(span) {
      let r4 = week_calendar_handle(span, day, slot, next, far_anchor_set);
      return r4;
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
    let r3 = week_calendar_cell_pressed(
      day,
      slot,
      anchor,
      anchor_click,
      free_click,
      records,
      paint_record,
      summary,
      ranges,
      summary_line,
    );
    return r3;
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
