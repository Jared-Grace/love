import { range } from "./range.mjs";
import { week_calendar } from "./week_calendar.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_input_date } from "./html_input_date.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { busy_item_build } from "./busy_item_build.mjs";
import { busy_item_label } from "./busy_item_label.mjs";
export function availability_editor(parent) {
  "owner screen: select time ranges on the weekly grid, pick a date, then add them as one-time, weekly, or monthly busy items; the items added so far are listed underneath";
  let current = [];
  let items = [];
  function on_ranges(ranges) {
    current = ranges;
  }
  week_calendar(parent, [], on_ranges);
  let panel = app_shared_container_blue(parent);
  html_div_text(panel, "Repeat these times");
  let date = html_input_date(panel);
  app_shared_input_style(date);
  function add_once() {
    commit("once");
  }
  function add_weekly() {
    commit("weekly");
  }
  function add_monthly() {
    commit("monthly");
  }
  app_shared_button(panel, "One time", add_once);
  app_shared_button(panel, "Weekly", add_weekly);
  app_shared_button(panel, "Monthly", add_monthly);
  let added = html_div(parent);
  function commit(kind) {
    let date_value = html_value_get(date);
    function add_one(range) {
      let item = busy_item_build(kind, range, date_value);
      list_add(items, item);
    }
    each(current, add_one);
    render_added();
  }
  function render_added() {
    html_clear(added);
    function line(item) {
      let text = busy_item_label(item);
      app_shared_text_body(added, text);
    }
    each(items, line);
  }
}
