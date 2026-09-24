import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
export async function currency_rate_year_average_browser(base, quote, today) {
  "$plain base";
  "$plain quote";
  "$plain today";
  "How many of the quote currency one of the base currency bought on average over the year up to today, asked from a browser - the mean of every daily rate in that year.";
  "The rates are the European Central Bank's, as the free Frankfurter service hands them out: it needs no key and lets any page ask, so a phone can ask it straight.";
  "A year's average rather than today's rate, so a price does not appear to change in value from one day to the next only because the market moved.";
  arguments_assert(arguments, 3);
  let start = new Date(today);
  let left = start.getFullYear();
  let difference = subtract(left, 1);
  start.setFullYear(difference);
  let iso = date_local_iso(start);
  let iso2 = date_local_iso(today);
  let url = text_combine_multiple([
    "https://api.frankfurter.dev/v2/rates?from=",
    iso,
    "&to=",
    iso2,
    "&base=",
    base,
    "&quotes=",
    quote,
  ]);
  let days = await http_json_browser_quiet(url);
  let total = 0;
  for (let day of days) {
    total += day.rate;
  }
  let average = divide(total, days.length);
  return average;
}
