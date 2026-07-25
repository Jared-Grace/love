import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_grid } from "./html_style_grid.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { week_day_names } from "./week_day_names.mjs";
import { slot_hour_label } from "./slot_hour_label.mjs";
import { week_calendar_color_anchor } from "./week_calendar_color_anchor.mjs";
import { week_calendar_color_empty } from "./week_calendar_color_empty.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_any } from "./list_any.mjs";
export function week_calendar(parent, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; click a piece to start a range, then click another piece in the same day to select every piece between them; reports the chosen {day, start, end} windows to on_ranges after each range";
  let days = week_day_names();
  let slots = numbers_up_to(48);
  let ranges = [];
  let anchor = null;
  let records = [];
  let scroller = html_div(parent);
  html_style_assign(scroller, {
    "max-height": "80vh",
    overflow: "auto",
  });
  let grid = html_div(scroller);
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
    let label = html_div_text(grid, slot_hour_label(slot));
    html_style_assign(label, {
      "font-size": "0.7rem",
      "text-align": "right",
      padding: "0 0.4rem",
      color: "#666666",
    });
    each(days, function (day) {
      day_cell(day, slot);
    });
  }
  function day_cell(day, slot) {
    let cell = html_div(grid);
    html_style_assign(cell, {
      width: "3.2rem",
      height: "1.1rem",
      border: "1px solid #e3e3e3",
      "box-sizing": "border-box",
    });
    html_on_click(cell, function () {
      cell_pressed(day, slot);
    });
    list_add(records, {
      day: day,
      slot: slot,
      element: cell,
    });
  }
  function selected_is(day, slot) {
    return list_any(ranges, function (range) {
      let same_day = range.day === day;
      let within = slot >= range.start && slot <= range.end;
      return same_day && within;
    });
  }
  function anchor_is(day, slot) {
    if (anchor === null) {
      return false;
    }
    return anchor.day === day && anchor.slot === slot;
  }
  function record_color(record) {
    if (anchor_is(record.day, record.slot)) {
      return week_calendar_color_anchor();
    }
    if (selected_is(record.day, record.slot)) {
      return app_shared_button_background();
    }
    return week_calendar_color_empty();
  }
  function paint() {
    each(records, function (record) {
      html_style_background_color_set(record.element, record_color(record));
    });
  }
  function cell_pressed(day, slot) {
    if (anchor === null) {
      anchor = {
        day: day,
        slot: slot,
      };
      paint();
      return;
    }
    if (anchor.day === day) {
      let start = Math.min(anchor.slot, slot);
      let end = Math.max(anchor.slot, slot);
      list_add(ranges, {
        day: day,
        start: start,
        end: end,
      });
      anchor = null;
      paint();
      on_ranges(ranges);
      return;
    }
    anchor = {
      day: day,
      slot: slot,
    };
    paint();
  }
}
