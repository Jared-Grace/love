import { date_time_zone_now } from "./date_time_zone_now.mjs";
export function date_time_zone_now_iso() {
  let now = date_time_zone_now();
  let iso = now.toISO();
  return iso;
}
