import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { equal } from "./equal.mjs";
import { time_12_label } from "./time_12_label.mjs";
import { date_zone_moment } from "./date_zone_moment.mjs";
import { date_zone_date_time } from "./date_zone_date_time.mjs";
import { date_zone_abbreviation } from "./date_zone_abbreviation.mjs";
export function app_receipts_purchase_when(purchase, zone) {
  "$plain purchase";
  "$plain zone";
  "The day and the time a purchase was made, as a clock in the given zone reads them: the day as 'YYYY-MM-DD', and the time as a person reads it, such as '9:30 AM'.";
  "A purchase is kept in Philippine time, so in that zone it is read as kept. In any other the same moment is found and read there, and the time names the zone's clock, such as '8:30 PM EST', so it is never mistaken for Philippine time. A purchase whose date or time has been emptied cannot be moved, so it stays as kept.";
  arguments_assert(arguments, 2);
  let date = property_get(purchase, "date");
  let time = property_get(purchase, "time");
  let object = country_philippines();
  let zone_kept = property_get(object, "zone");
  if (equal(zone, zone_kept) || equal(date, "") || equal(time, "")) {
    let kept = {
      date,
      time_text: equal(time, "") ? "" : time_12_label(time),
    };
    return kept;
  }
  let moment = date_zone_moment(date, time, zone_kept);
  let wall = date_zone_date_time(moment, zone);
  let hours_minutes = property_get(wall, "time");
  let moved = {
    date: property_get(wall, "date"),
    time_text:
      time_12_label(hours_minutes) + " " + date_zone_abbreviation(moment, zone),
  };
  return moved;
}
