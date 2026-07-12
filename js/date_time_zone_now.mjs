import { DateTime } from "luxon";
export function date_time_zone_now() {
  let r = DateTime.now();
  return r;
}
