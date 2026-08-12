import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
export function app_g_day_trail_length() {
  "how many tiles behind the player are remembered as the way the line walks: one for every place the line could ever have, and one more.";
  "One per place, because the person at the back of the line stands on the oldest tile of it - so a trail shorter than the line leaves somebody with nowhere to stand. The spare one is the room the line needs to back UP: walking the procession backwards moves everybody one tile further down the trail, and with no tile past the end of the line the player could be sealed into a dead end by their own followers.";
  "The day's believers are every member the line could ever have - the ones still waiting to be gathered and the ones already walking - so the length follows the day rather than being guessed at. It was a flat twelve before, which was both too many on most days and one too few for a house church of thirteen.";
  let state = app_g_day_state();
  let converts = property_get(state, "converts");
  let followers = property_get(state, "followers");
  let waiting = list_size(converts);
  let walking = list_size(followers);
  let people = add(waiting, walking);
  let length = add(people, 1);
  return length;
}
