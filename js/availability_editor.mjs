import { week_calendar } from "./week_calendar.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { html_on } from "./html_on.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { busy_item_build } from "./busy_item_build.mjs";
import { busy_item_label } from "./busy_item_label.mjs";
export function availability_editor(parent) {
  "owner screen: select time ranges on the weekly grid, pick a date, then choose how they repeat (daily, weekly, monthly, or one time); the chosen button stays highlighted and the preview below refreshes to show the busy items that choice would create — it replaces, never appends";
  let current = [];
  let chosen = null;
  let button_records = [];
  function on_ranges(ranges) {
    current = ranges;
    render_preview();
  }
  week_calendar(parent, [], on_ranges);
  let panel = app_shared_container_blue(parent);
  html_div_text(panel, "Repeat these times");
  let date = html_input_date(panel);
  app_shared_input_style(date);
  html_on(date, "change", render_preview);
  add_button("daily", "Daily");
  add_button("weekly", "Weekly");
  add_button("monthly", "Monthly");
  add_button("once", "One time");
  let preview = html_div(parent);
  render_preview();
  function add_button(kind, text) {
    function on_click() {
      choose(kind);
    }
    let element = app_shared_button(panel, text, on_click);
    list_add(button_records, {
      kind: kind,
      element: element,
    });
  }
  function choose(kind) {
    chosen = kind;
    highlight();
    render_preview();
  }
  function highlight() {
    function paint_button(record) {
      let selected = record.kind === chosen;
      let outline = selected
        ? text_combine("3px solid ", app_shared_color_blue_dark())
        : "none";
      html_style_assign(record.element, {
        outline: outline,
      });
    }
    each(button_records, paint_button);
  }
  function line(span) {
    let date_value = html_value_get(date);
    let item = busy_item_build(chosen, span, date_value);
    let text = busy_item_label(item);
    app_shared_text_body(preview, text);
  }
  function render_preview() {
    html_clear(preview);
    let has_ranges = list_empty_not_is(current);
    let none = chosen === null;
    if (none) {
      app_shared_text_body(preview, "Pick how these times repeat");
    } else if (has_ranges) {
      each(current, line);
    } else {
      app_shared_text_body(preview, "Select times on the grid above");
    }
  }
}
