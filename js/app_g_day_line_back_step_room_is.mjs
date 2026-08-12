import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function app_g_day_line_back_step_room_is() {
  "is there room behind the line to walk the whole procession one tile backwards down its own trail.";
  "One spare tile of trail past the end of the line is the whole of it: everybody moves one place further down the trail, so the person at the back needs a tile there that nobody is standing on. A trail exactly as long as the line has none, and a day that has not been walked far enough has none either.";
  "It is the one thing that can stop a line reversing, so it is also the question that says when a player is walled in by the people following them - which is why it is asked from outside the step as well as inside it.";
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  let line = property_list_size(state, "followers");
  let room = list_size_greater_than(trail, line);
  return room;
}
