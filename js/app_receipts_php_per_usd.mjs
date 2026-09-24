import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { currency_rate_year_average_browser } from "./currency_rate_year_average_browser.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
export async function app_receipts_php_per_usd() {
  "How many pesos a US dollar bought on average over the past year, or null when this phone has never been able to ask.";
  "Asked at most once a day and kept on this phone, so the list opens at once and still shows dollars with no internet - then from the last day it could ask.";
  arguments_assert(arguments, 0);
  let app_name = fn_name("app_receipts");
  let key = text_frozen("php_per_usd");
  let kept = storage_local_name_get(app_name, key);
  let now = new Date();
  let today = date_local_iso(now);
  if (not_equal(kept, null) && equal(kept.date, today)) {
    let r = kept.rate;
    return r;
  }
  let b = browser_online_is();
  if (not(b)) {
    let r2 = equal(kept, null) ? null : kept.rate;
    return r2;
  }
  try {
    let rate = await currency_rate_year_average_browser("USD", "PHP", now);
    storage_local_name_set(app_name, key, {
      date: today,
      rate,
    });
    return rate;
  } catch (e) {
    let r3 = equal(kept, null) ? null : kept.rate;
    return r3;
  }
}
