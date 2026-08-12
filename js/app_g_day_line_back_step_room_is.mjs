import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function app_g_day_line_back_step_room_is() {
  "is there room behind the line to back the whole procession one tile down its own trail - everybody moves one place further down it, so the person at the back needs a spare tile past the end.";
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  let line = property_list_size(state, "followers");
  let room = list_size_greater_than(trail, line);
  return room;
}
