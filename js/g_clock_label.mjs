import { hour_label_12 } from "./hour_label_12.mjs";
import { floor } from "./floor.mjs";
export function g_clock_label(clock) {
  "a wall-clock hour (e.g. 13.2) as a friendly 12-hour label like '1 PM' — floored to the hour, AM before noon and PM from noon, with hour 0 / 12 shown as 12. drives the #day_conversation time-of-day toast so the player reads a real time, not a number";
  let hour = floor(clock);
  let combined = hour_label_12(hour);
  return combined;
}
