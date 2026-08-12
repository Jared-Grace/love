import { property_get } from "./property_get.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { app_g_day_trail_length } from "./app_g_day_trail_length.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_g_day_trail_add(from) {
  "remember the tile the player has just left, at the front of the day's trail - the way the line behind them walks.";
  "The trail is what makes a line rather than a crowd: the person at the front of it stands where the player last stood, the next stands where the player stood before that, and so on. Kept as its own list rather than read back off where the people are standing, because somebody who has only just been gathered is not standing in the line yet and still has to be told where the back of it is.";
  "A COPY of the tile, not the tile itself. What arrives is a step of the path being walked, and a follower is moved by assigning what they are given onto the person - so handing over the path's own node would write the path's other workings onto somebody.";
  let x = property_get(from, "x");
  let y = property_get(from, "y");
  let tile = {
    x,
    y,
  };
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  list_add_first(trail, tile);
  let length = app_g_day_trail_length();
  let a = list_size(trail);
  let over = greater_than(a, length);
  if (over) {
    let kept = list_take(trail, length);
    property_set(state, "trail", kept);
  }
}
