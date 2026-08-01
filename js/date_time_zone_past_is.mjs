import { less_than } from "./less_than.mjs";
import { DateTime } from "luxon";
export function date_time_zone_past_is(dt, zone) {
  let b = DateTime.now().setZone(zone);
  let p = less_than(dt, b);
  return p;
}
