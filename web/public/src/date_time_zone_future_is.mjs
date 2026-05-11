import { DateTime } from "luxon";
export function date_time_zone_future_is(dt, zone) {
  let p = dt < DateTime.now().setZone(zone);
  return p;
}
