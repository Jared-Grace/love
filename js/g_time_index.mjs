import { g_times } from "./g_times.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function g_time_index(name) {
  ("the phase INDEX of a named time of day within the ",
    g_times.name,
    " cycle (morning 0 … sunset 3, night 4, sunrise 5) — so a caller can target a time BY NAME instead of a literal number that silently shifts when a keyframe is inserted (adding sunset pushed night from 3 to 4). the sky phase is continuous, so this integer is also the exact phase where that time is at full strength");
  let times = g_times();
  let index = list_index_of(times, name);
  return index;
}
