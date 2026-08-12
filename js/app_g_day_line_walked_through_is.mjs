import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_any } from "./list_any.mjs";
export function app_g_day_line_walked_through_is(path) {
  "true when the way the player is about to walk runs over somebody in their own line - a line being passed stands still instead of walking up behind.";
  "ask it BEFORE the first step. Afterwards the line has already been walked through and the answer is always no.";
  let followers = app_g_day_state_property("followers");
  let line = g_coordinates_index(followers);
  function standing(coordinates) {
    let key = g_coordinates_key(coordinates);
    let there = property_exists(line, key);
    return there;
  }
  let through = list_any(path, standing);
  return through;
}
