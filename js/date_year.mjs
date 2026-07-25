import { date_from_iso } from "./date_from_iso.mjs";
export function date_year(iso) {
  "the four-digit year of a 'YYYY-MM-DD' date, as a number";
  let d = date_from_iso(iso);
  let year = d.getFullYear();
  return year;
}
