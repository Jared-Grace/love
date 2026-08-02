import { arguments_assert } from "./arguments_assert.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
import { date_local_time_iso } from "./date_local_time_iso.mjs";
import { date_zone_offset_iso } from "./date_zone_offset_iso.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_time_zone_iso(d) {
  arguments_assert(arguments, 1);
  ("A moment written in full, in the zone it is read in:");
  ("'2026-08-02T16:38:44.117+08:00'.");
  ("The day, the clock, and the zone are three separate readings joined here, so");
  ("each one can be asked for on its own where only that part is wanted.");
  let day = date_local_iso(d);
  let time = date_local_time_iso(d);
  let zone = date_zone_offset_iso(d);
  let iso = text_combine_multiple([day, "T", time, zone]);
  return iso;
}
