import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_zone_countries } from "./app_receipts_zone_countries.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_choice_row } from "./app_receipts_choice_row.mjs";
export function app_receipts_zone_choose(parent, zone, on_choose) {
  "$plain parent";
  "$plain zone";
  "$plain on_choose";
  "Two buttons side by side under a title, one for each country whose clock the list can be read in, each named by its flag and name. The one in use is ticked and bold; pressing either hands on_choose its zone.";
  arguments_assert(arguments, 3);
  let choices = [];
  for (let country of app_receipts_zone_countries()) {
    choices.push({
      key: property_get(country, "zone"),
      text: property_get(country, "flag") + " " + property_get(country, "name"),
    });
  }
  app_receipts_choice_row(
    parent,
    "Show dates and times in",
    choices,
    zone,
    on_choose,
  );
}
