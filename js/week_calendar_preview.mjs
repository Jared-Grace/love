import { week_calendar_current } from "./week_calendar_current.mjs";
import { equal } from "./equal.mjs";
import { week_calendar } from "./week_calendar.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { storage_local_specify_set } from "./storage_local_specify_set.mjs";
export function week_calendar_preview() {
  ("preview the weekly grid on the sandbox app at #",
    week_calendar.name,
    " for the current week; selections are kept in local storage so a refresh restores them");
  let root = html_body_div();
  let key = "week_calendar_preview_ranges";
  let saved = storage_local_specify_get(key);
  let initial = equal(saved, null) ? [] : saved;
  function on_ranges(ranges) {
    storage_local_specify_set(key, ranges);
  }
  week_calendar_current(root, initial, on_ranges);
}
