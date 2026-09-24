import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function app_receipts_price_php_text(price) {
  "$plain price";
  "A price in pesos as a person reads it: the peso sign, commas between thousands, and two places after the point when there are any centavos at all, so 1249.5 reads ₱1,249.50 and 249 reads ₱249.";
  arguments_assert(arguments, 1);
  let n = Number(price);
  let whole = Number.isInteger(n);
  let places = whole ? 0 : 2;
  let digits = n.toLocaleString("en-US", {
    minimumFractionDigits: places,
    maximumFractionDigits: 2,
  });
  let r = "₱" + digits;
  if (equal(price, "")) {
    r = "";
  }
  return r;
}
