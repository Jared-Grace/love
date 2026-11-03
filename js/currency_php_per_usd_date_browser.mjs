import { currency_php_per_usd_month_browser } from "./currency_php_per_usd_month_browser.mjs";
import { property_get } from "./property_get.mjs";
export async function currency_php_per_usd_date_browser(date) {
  "$plain date";
  "How many pesos one US dollar bought on one day, written YYYY-MM-DD, asked from a browser. The rates travel a month at a time, so asking about one day of a finished month costs the shared store one file and asks Frankfurter nothing once anybody has asked before.";
  "A day with no rate throws, since no number is the honest answer there.";
  let month = date.slice(0, 7);
  let rates = await currency_php_per_usd_month_browser(month);
  let rate = property_get(rates, date);
  return rate;
}
