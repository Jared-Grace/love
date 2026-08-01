import { greater_than } from "./greater_than.mjs";
import { log } from "./log.mjs";
import { DateTime } from "luxon";
export function date_time_zone_future_is(dt, zone) {
  log(date_time_zone_future_is.name, {
    dt,
  });
  let b = DateTime.now().setZone(zone);
  let f = greater_than(dt, b);
  return f;
}
