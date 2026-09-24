import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_receipts_price_usd(price, php_per_usd) {
  "$plain price";
  "$plain php_per_usd";
  "A price in whole pesos written as US dollars and cents, like '$4.15' - or empty when there is no price yet, or no rate known on this phone.";
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
  return dollars;
}
