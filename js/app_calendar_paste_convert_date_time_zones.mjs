import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_calendar_paste_convert_date_time_zones(r, combined) {
  arguments_assert(arguments, 2);
  let list = property_get(r, "list");
  let start = property_get(r, "start");
  let duration = property_get(r, "duration");
  list_add(list, combined);
  let date_time_zones = list_join_newline(list);
  let r2 = {
    start,
    duration,
    date_time_zones,
  };
  return r2;
}
