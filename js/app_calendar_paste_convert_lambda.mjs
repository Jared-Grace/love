import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { date_time_zone_set_zone } from "./date_time_zone_set_zone.mjs";
import { date_time_zone_format_to_time_space } from "./date_time_zone_format_to_time_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
export function app_calendar_paste_convert_lambda(item) {
  arguments_assert(arguments, 1);
  let start_inner = property_get(item, "start");
  let zone_inner = property_get(item, "zone");
  let name = property_get(item, "name");
  let parenthesis = property_get(item, "parenthesis");
  let flag = property_get(item, "flag");
  let start_zoned = date_time_zone_set_zone(start_inner, zone_inner);
  let start_formatted = date_time_zone_format_to_time_space(start_zoned);
  let t = text_combine_multiple([
    name,
    " Meeting start time: ",
    start_formatted,
    " ",
    flag,
  ]);
  if (parenthesis) {
    t = text_wrap_parenthesis(t);
  }
  return t;
}
