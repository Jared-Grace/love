import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_any } from "./list_any.mjs";
export function app_g_day_line_walked_through_is(path) {
  "true when the way the player is about to walk runs over somebody in their own line.";
  "It is asked BEFORE the first step, while everybody is still standing where the path was worked out against. Asked afterwards it would answer about a line that has already been walked through, which is a different question and always no.";
  "A walk like this is the last resort - the way around is taken whenever there is one, and the line is backed down its own trail whenever there is trail to back into. It is only left when a player has gathered more people than they have walked tiles, so there is no room behind the line to reverse it into and nothing else that could ever open the way.";
  "What it is for is telling the walk that the line is being passed rather than followed. A line that is being followed walks up one tile behind the player at every step; a line being passed stands still and is traded with, one person at a time, and is put back in order once at the end.";
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
