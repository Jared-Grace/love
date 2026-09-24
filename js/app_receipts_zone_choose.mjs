import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_receipts_zone_countries } from "./app_receipts_zone_countries.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_receipts_zone_choose(parent, zone, on_choose) {
  "$plain parent";
  "$plain zone";
  "$plain on_choose";
  "Two buttons side by side under a title, one for each country whose clock the list can be read in, each named by its flag and name. The one in use is ticked and bold; pressing either hands on_choose its zone.";
  arguments_assert(arguments, 3);
  app_shared_field_title(parent, "Show dates and times in");
  let row = html_div(parent);
  html_style_set(row, "display", "flex");
  html_style_set(row, "gap", "0.6em");
  for (let country of app_receipts_zone_countries()) {
    let country_zone = property_get(country, "zone");
    let chosen = equal(country_zone, zone);
    let text =
      (chosen ? "✅ " : "") +
      property_get(country, "flag") +
      " " +
      property_get(country, "name");
    function on_press() {
      on_choose(country_zone);
    }
    let button = app_shared_button(row, text, on_press);
    html_style_set(button, "flex", "1");
    if (chosen) {
      html_bold(button);
    }
  }
}
