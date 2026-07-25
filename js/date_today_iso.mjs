import { date_local_iso } from "./date_local_iso.mjs";
export function date_today_iso() {
  "today's calendar date in the browser's local time, as 'YYYY-MM-DD'";
  let now = new Date();
  let iso = date_local_iso(now);
  return iso;
}
