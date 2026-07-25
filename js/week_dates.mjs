import { numbers_up_to } from "./numbers_up_to.mjs";
import { list_map } from "./list_map.mjs";
import { date_add_days } from "./date_add_days.mjs";
export function week_dates(sunday_iso) {
  "the seven 'YYYY-MM-DD' dates of the week that starts on the given Sunday, Sunday first";
  let offsets = numbers_up_to(7);
  function to_date(offset) {
    let iso = date_add_days(sunday_iso, offset);
    return iso;
  }
  let dates = list_map(offsets, to_date);
  return dates;
}
