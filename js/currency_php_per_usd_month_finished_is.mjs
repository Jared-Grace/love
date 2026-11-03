import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
export function currency_php_per_usd_month_finished_is(month, date) {
  "$plain month";
  "$plain date";
  "Whether a month, written YYYY-MM, was over for good on a day written YYYY-MM-DD, so that its rates can no longer change.";
  "One whole extra day has to pass after the month ends, because a rate asked for on its own day may still change later that day.";
  let moment = new Date(date + "T00:00:00Z");
  let left = moment.getUTCDate();
  let difference = subtract(left, 1);
  moment.setUTCDate(difference);
  let yesterday_month = date_iso_to(moment).slice(0, 7);
  let l = less_than(month, yesterday_month);
  return l;
}
