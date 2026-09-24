import { arguments_assert } from "./arguments_assert.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { country_usa } from "./country_usa.mjs";
import { property_get } from "./property_get.mjs";
import { date_zone_moment } from "./date_zone_moment.mjs";
import { date_zone_date_time } from "./date_zone_date_time.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
import { time_12_label } from "./time_12_label.mjs";
import { date_zone_abbreviation } from "./date_zone_abbreviation.mjs";
export function app_receipts_purchase_usa_text(date, time) {
  "$plain date";
  "$plain time";
  "A purchase's date and time, which are Philippine time, as the same moment reads in the eastern United States, where the receipts are reviewed: '🇺🇸 2026 Sept 24 - 10:06 AM EDT'. The eastern clock's own rules decide it, so it says EST in winter and EDT in summer, an hour apart.";
  arguments_assert(arguments, 2);
  let philippines = country_philippines();
  let usa = country_usa();
  let zone_usa = property_get(usa, "zone");
  let zone = property_get(philippines, "zone");
  let moment = date_zone_moment(date, time, zone);
  let wall = date_zone_date_time(moment, zone_usa);
  let text =
    property_get(usa, "flag") +
    " " +
    date_year_month_day(wall.date) +
    " - " +
    time_12_label(wall.time) +
    " " +
    date_zone_abbreviation(moment, zone_usa);
  return text;
}
