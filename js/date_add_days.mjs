import { date_from_iso } from "./date_from_iso.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
export function date_add_days(iso, n) {
  "the calendar date n days after iso, as 'YYYY-MM-DD'; n may be negative, and month and year roll over correctly";
  let d = date_from_iso(iso);
  let v = d.getFullYear();
  let v2 = d.getMonth();
  let shifted = new Date(v, v2, d.getDate() + n);
  let out = date_local_iso(shifted);
  return out;
}
