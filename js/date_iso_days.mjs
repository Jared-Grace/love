import { divide_floor } from "./divide_floor.mjs";
import { date_from_iso } from "./date_from_iso.mjs";
export function date_iso_days(iso) {
  "the whole number of days from the epoch to a 'YYYY-MM-DD' date, used to sort dates chronologically";
  let d = date_from_iso(iso);
  let ms = d.getTime();
  let days = divide_floor(ms, 86400000);
  return days;
}
