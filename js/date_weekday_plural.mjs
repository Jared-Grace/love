import { date_from_iso } from "./date_from_iso.mjs";
import { week_day_names_plural } from "./week_day_names_plural.mjs";
import { property_get } from "./property_get.mjs";
export function date_weekday_plural(iso) {
  "the plural weekday name for a 'YYYY-MM-DD' date, e.g. 'Sundays'";
  let d = date_from_iso(iso);
  let index = d.getDay();
  let names = week_day_names_plural();
  let name = property_get(names, index);
  return name;
}
