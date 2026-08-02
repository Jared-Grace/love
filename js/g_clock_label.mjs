import { greater_than_equal } from "./greater_than_equal.mjs";
import { floor } from "./floor.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_clock_label(clock) {
  "a wall-clock hour (e.g. 13.2) as a friendly 12-hour label like '1 PM' — floored to the hour, AM before noon and PM from noon, with hour 0 / 12 shown as 12. drives the #day_conversation time-of-day toast so the player reads a real time, not a number";
  let hour = floor(clock);
  let shown = hour_12_shown(hour);
  let suffix = hour_12_suffix(hour);
  let combined = text_combine_multiple([shown, suffix]);
  return combined;
}
