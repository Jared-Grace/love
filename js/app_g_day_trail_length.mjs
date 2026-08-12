import { app_g_day_trail_back_out_depth } from "./app_g_day_trail_back_out_depth.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
export function app_g_day_trail_length() {
  "how many tiles behind the player are remembered as the way the line walks: one for every place the line could ever have, plus the room it needs to back out of a dead end.";
  "One per place, because the person at the back of the line stands on the oldest tile of it - so a trail shorter than the line leaves somebody with nowhere to stand. The day's believers are every member the line could ever have, the ones still waiting to be gathered and the ones already walking, so that half follows the day rather than being guessed at. It was a flat twelve before, which was both too many on most days and one too few for a house church of thirteen.";
  "The rest is retreat. Walking the procession backwards moves everybody one tile further down the trail, so each step back spends a tile that nothing puts back - and a trail trimmed to the line plus one buys exactly one step, which frees a player who walked exactly one tile into the dead end and nobody else.";
  let state = app_g_day_state();
  let converts = property_get(state, "converts");
  let followers = property_get(state, "followers");
  let waiting = list_size(converts);
  let walking = list_size(followers);
  let people = add(waiting, walking);
  let depth = app_g_day_trail_back_out_depth();
  let length = add(people, depth);
  return length;
}
