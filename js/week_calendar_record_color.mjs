import { arguments_assert } from "./arguments_assert.mjs";
import { week_calendar_anchor_is } from "./week_calendar_anchor_is.mjs";
import { week_calendar_selected_is } from "./week_calendar_selected_is.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { week_calendar_color_empty } from "./week_calendar_color_empty.mjs";
export function week_calendar_record_color(record, anchor, ranges) {
  arguments_assert(arguments, 3);
  let is_anchor = week_calendar_anchor_is(record.day, record.slot, anchor);
  let is_selected = week_calendar_selected_is(record.day, record.slot, ranges);
  let anchor_color = app_shared_color_blue_dark();
  let selected_color = app_shared_container_blue_border_color();
  let empty_color = week_calendar_color_empty(record.slot);
  let chosen = is_anchor
    ? anchor_color
    : is_selected
      ? selected_color
      : empty_color;
  return chosen;
}
