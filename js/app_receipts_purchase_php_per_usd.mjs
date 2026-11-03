import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_php_per_usd_month_kept } from "./app_receipts_php_per_usd_month_kept.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
export function app_receipts_purchase_php_per_usd(purchase) {
  "$plain purchase";
  "The peso rate to show for a purchase right now, read only from this phone so nothing waits: php_per_usd, the number or null when none is known, and day_is, whether it is the rate of the purchase's own day rather than the year's average.";
  "A purchase's date is kept in Philippine time, so the same rate shows whichever clock the list is read on.";
  let date = property_get(purchase, "date");
  if (not_equal(date, "")) {
    let month = date.slice(0, 7);
    let kept = app_receipts_php_per_usd_month_kept(month);
    if (not_equal(kept, null)) {
      let rate = property_get_or(kept.rates, date, null);
      if (not_equal(rate, null)) {
        let r = {
          php_per_usd: rate,
          day_is: true,
        };
        return r;
      }
    }
  }
  let key = text_frozen("php_per_usd");
  let year = storage_local_name_get(fn_name("app_receipts"), key);
  let r2 = {
    php_per_usd: equal(year, null) ? null : year.rate,
    day_is: false,
  };
  return r2;
}
