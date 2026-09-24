import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_receipts_price_usd_text(price, php_per_usd) {
  "$plain price";
  "$plain php_per_usd";
  "The line under a price saying what it comes to in US dollars and at what rate - empty when there is no price yet, or no rate known on this phone.";
  arguments_assert(arguments, 2);
  if (equal(price, "") || equal(php_per_usd, null)) {
    let r = "";
    return r;
  }
  let top = Number(price);
  let usd = divide(top, php_per_usd);
  let dollars = usd.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  let r2 =
    "≈ " +
    dollars +
    " USD (₱" +
    php_per_usd.toFixed(2) +
    " per $1, the average over the past year)";
  return r2;
}
