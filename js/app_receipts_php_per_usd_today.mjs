import { subtract } from "./subtract.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { app_receipts_php_per_usd_month_kept } from "./app_receipts_php_per_usd_month_kept.mjs";
import { not_equal } from "./not_equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function app_receipts_php_per_usd_today() {
  "The newest peso rate this phone holds, read only from this phone so nothing waits: php_per_usd, the number or null when none is known, and date, the day that rate is for, or null when it is the year's average instead.";
  "The newest day in the month running on the world clock, because that is the clock Frankfurter's days are counted on. Early in a new month that may hold no day yet, and the year's average stands in, labelled as such by whoever shows it.";
  let today = date_iso_to(new Date());
  let month = today.slice(0, 7);
  let kept = app_receipts_php_per_usd_month_kept(month);
  if (not_equal(kept, null)) {
    let dates = object_property_names(kept.rates);
    let a = list_size(dates);
    if (greater_than(a, 0)) {
      dates.sort();
      let left = list_size(dates);
      let date = dates[subtract(left, 1)];
      let r = {
        php_per_usd: property_get(kept.rates, date),
        date,
      };
      return r;
    }
  }
  let key = text_frozen("php_per_usd");
  let year = storage_local_name_get(fn_name("app_receipts"), key);
  let r2 = {
    php_per_usd: equal(year, null) ? null : year.rate,
    date: null,
  };
  return r2;
}
