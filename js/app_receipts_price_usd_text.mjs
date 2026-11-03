import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_receipts_price_usd } from "./app_receipts_price_usd.mjs";
export function app_receipts_price_usd_text(price, rate) {
  "$plain price";
  "$plain rate";
  ("rate is what ",
    fn_name("app_receipts_purchase_php_per_usd"),
    " hands back.");
  ("The line under a price saying what it comes to in US dollars and at what rate, and whether that rate is the purchase's own day or the year's average - empty when there is no price yet, or no rate known on this phone.");
  arguments_assert(arguments, 2);
  let php_per_usd = property_get(rate, "php_per_usd");
  let rate_said = property_get(rate, "day_is")
    ? " per $1 on that day)"
    : " per $1, the average over the past year)";
  if (equal(price, "") || equal(php_per_usd, null)) {
    let r = "";
    return r;
  }
  let dollars = app_receipts_price_usd(price, php_per_usd);
  let r2 = "≈ " + dollars + " USD (₱" + php_per_usd.toFixed(2) + rate_said;
  return r2;
}
