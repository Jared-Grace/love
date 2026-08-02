import { g_phase_time_index } from "./g_phase_time_index.mjs";
import { g_times } from "./g_times.mjs";
import { list_get } from "./list_get.mjs";
export function g_phase_time(phase) {
  ("the NAME of the time of day a continuous sky phase is nearest — morning, noon, afternoon, sunset, night or sunrise, straight out of ",
    g_times.name,
    ". the sky already speaks this phase as colour; this is the same instant spoken as a word, so text can agree with what the player is looking at");
  let index = g_phase_time_index(phase);
  let times = g_times();
  let time = list_get(times, index);
  return time;
}
