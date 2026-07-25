import { date_from_iso } from "./date_from_iso.mjs";
import { week_day_names } from "./week_day_names.mjs";
import { property_get } from "./property_get.mjs";
export function date_weekday_short(iso) {
  "the short weekday name for a 'YYYY-MM-DD' date, e.g. 'Sun'";
  let d = date_from_iso(iso);
  let index = d.getDay();
  let names = week_day_names();
  let name = property_get(names, index);
  return name;
}
