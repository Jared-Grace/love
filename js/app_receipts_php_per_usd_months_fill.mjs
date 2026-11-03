import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { app_receipts_php_per_usd } from "./app_receipts_php_per_usd.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique } from "./list_unique.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_receipts_php_per_usd_month_kept } from "./app_receipts_php_per_usd_month_kept.mjs";
import { currency_php_per_usd_month_finished_is } from "./currency_php_per_usd_month_finished_is.mjs";
import { currency_php_per_usd_month_browser } from "./currency_php_per_usd_month_browser.mjs";
import { app_receipts_php_per_usd_month_key } from "./app_receipts_php_per_usd_month_key.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
export async function app_receipts_php_per_usd_months_fill(
  purchases,
  on_arrived,
) {
  "$plain purchases";
  "$plain on_arrived";
  "Fetches, one at a time and newest first, the months of peso rates these purchases need and this phone does not hold, keeping each here and telling on_arrived as it lands. Nothing waits on this; the list draws first and its dollars are corrected as rates come.";
  "A finished month is asked once. The month still running is asked at most once a day, counted on the world clock, because that is when Frankfurter's next day begins.";
  "Hands back whether it got through them all. The first failure stops it, since the next would most likely fail the same way, each after its full wait.";
  arguments_assert(arguments, 2);
  let b = browser_online_is();
  if (not(b)) {
    return false;
  }
  await app_receipts_php_per_usd();
  on_arrived();
  let months = [];
  for (let purchase of purchases) {
    let date = property_get(purchase, "date");
    if (not_equal(date, "")) {
      let v = date.slice(0, 7);
      months.push(v);
    }
  }
  months = list_unique(months);
  months.sort();
  months.reverse();
  let today = date_iso_to(new Date()).slice(0, 10);
  for (let month of months) {
    let kept = app_receipts_php_per_usd_month_kept(month);
    if (not_equal(kept, null)) {
      let asked = kept.asked;
      if (
        equal(asked, today) ||
        currency_php_per_usd_month_finished_is(month, asked)
      ) {
        continue;
      }
    }
    let rates = null;
    try {
      rates = await currency_php_per_usd_month_browser(month);
    } catch (e) {
      return false;
    }
    let key = app_receipts_php_per_usd_month_key(month);
    storage_local_name_set(fn_name("app_receipts"), key, {
      asked: today,
      rates,
    });
    on_arrived();
  }
  return true;
}
