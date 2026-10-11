import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_zone_get } from "./app_receipts_zone_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_zone_choose } from "./app_receipts_zone_choose.mjs";
import { app_receipts_purchase_when } from "./app_receipts_purchase_when.mjs";
import { not_equal } from "./not_equal.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
import { app_receipts_day_card } from "./app_receipts_day_card.mjs";
import { app_receipts_purchase_row } from "./app_receipts_purchase_row.mjs";
export function app_receipts_days_draw(
  list,
  purchases,
  php_per_usd,
  on_open,
  on_zone,
) {
  "$plain list";
  "$plain purchases";
  "$plain php_per_usd";
  "$plain on_open";
  "$plain on_zone";
  "Draws a folder's purchases into list, one line each under a card per day, with the choice of clock above them. Pressing a line hands on_open the purchase; choosing a clock hands on_zone the zone, and whoever called draws again.";
  arguments_assert(arguments, 5);
  ("Above the list the person picks whose clock it is read in, Philippine or eastern US; the days and times below follow it, and the choice is kept on this phone for next time.");
  let country = app_receipts_zone_get();
  let zone = property_get(country, "zone");
  app_receipts_zone_choose(list, zone, on_zone);
  ("The list is newest first, so each day's purchases sit together; each day is a card titled with the day on the chosen clock. Moving every purchase by the same hours keeps them in order, so a day's purchases still sit together.");
  let day_before = null;
  let day_card = null;
  for (let purchase of purchases) {
    let when = app_receipts_purchase_when(purchase, zone);
    let day = property_get(when, "date");
    if (not_equal(day, day_before)) {
      let text = date_year_month_day(day);
      day_card = app_receipts_day_card(list, text);
      day_before = day;
    }
    let time_text = property_get(when, "time_text");
    app_receipts_purchase_row(
      day_card,
      purchase,
      php_per_usd,
      on_open,
      time_text,
    );
  }
}
