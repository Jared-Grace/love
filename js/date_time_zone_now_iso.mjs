import { date_now } from "./date_now.mjs";
import { date_time_zone_iso } from "./date_time_zone_iso.mjs";
export function date_time_zone_now_iso() {
  "Right now, written in full with the zone on it.";
  "Every command run through a seam writes one of these into the log, so it sits";
  "on the floor of the whole repo: the line costs it whether the command does any";
  "work or not. It was read off a calendar library, which is 200 KiB to compile";
  "and measured 16 ms of the 220 ms a command takes at its cheapest, for one";
  "string. The clock the machine already has answers the same question, to the";
  "same characters - checked against the library over 200,000 instants.";
  let now = date_now();
  let iso = date_time_zone_iso(now);
  return iso;
}
