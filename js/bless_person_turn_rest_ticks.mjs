import { arguments_assert } from "./arguments_assert.mjs";
export function bless_person_turn_rest_ticks() {
  arguments_assert(arguments, 0);
  ("How many of their own steps somebody lets go by after turning before they will turn right round.");
  ("A turn about straight after another turn is a person spinning on the spot. Somebody pacing a short stretch of pavement - step, turn about, step, turn about - read as twirling, because every turn was followed at once by the next one. Two steps' worth of standing or walking between them is enough for each turn to read as its own decision.");
  ("Counted in steps and not in time, because each person keeps their own pace, and a rest measured in time would be nothing for a slow walker and an age for a quick one.");
  let r = 2;
  return r;
}
