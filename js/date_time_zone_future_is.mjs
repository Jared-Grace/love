import { log } from "./log.mjs";
import { DateTime } from "luxon";
export function date_time_zone_future_is(dt, zone) {
  log(date_time_zone_future_is.name, {
    dt,
  });
  let f = dt > DateTime.now().setZone(zone);
  return f;
}
