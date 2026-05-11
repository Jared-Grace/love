import { DateTime } from "luxon";
export function date_time_zone_past_is(dt, zone) {
  let r4 = dt <= DateTime.now().setZone(zone);
  return r4;
}
