import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { date_from_iso } from "./date_from_iso.mjs";
export function date_iso_days(iso) {
  "the whole number of days from the epoch to a 'YYYY-MM-DD' date, used to sort dates chronologically";
  let d = date_from_iso(iso);
  let ms = d.getTime();
  let divided = divide(ms, 86400000);
  let days = floor(divided);
  return days;
}
