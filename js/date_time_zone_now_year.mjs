import { date_time_zone_now } from "./date_time_zone_now.mjs";
export function date_time_zone_now_year() {
  let r = date_time_zone_now();
  let y = r.year;
  return y;
}
