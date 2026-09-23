import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_date } from "./app_shared_input_date.mjs";
import { app_shared_input_time } from "./app_shared_input_time.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on } from "./html_on.mjs";
export function app_shared_date_time_edit(parent, date, time, on_change) {
  "$plain parent";
  "$plain date";
  "$plain time";
  "$plain on_change";
  "A moment shown as a date and a time that can each be changed, the same in every app. It starts at the date 'YYYY-MM-DD' and time 'HH:MM' it is given, and every change hands on_change the date and time both as they now stand.";
  arguments_assert(arguments, 4);
  let date_input = app_shared_input_date(parent, "Date");
  let time_input = app_shared_input_time(parent, "Time");
  html_value_set(date_input, date);
  html_value_set(time_input, time);
  function changed() {
    let date_now = html_value_get(date_input);
    let time_now = html_value_get(time_input);
    on_change(date_now, time_now);
  }
  html_on(date_input, "change", changed);
  html_on(time_input, "change", changed);
}
