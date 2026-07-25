import { date_from_iso } from "./date_from_iso.mjs";
import { date_add_days } from "./date_add_days.mjs";
export function date_week_sunday(iso) {
  "the Sunday that begins the week containing iso, as 'YYYY-MM-DD'";
  let d = date_from_iso(iso);
  let weekday = d.getDay();
  let sunday = date_add_days(iso, -weekday);
  return sunday;
}
