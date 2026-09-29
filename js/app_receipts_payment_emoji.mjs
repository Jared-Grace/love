import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_payment_get } from "./app_receipts_payment_get.mjs";
import { equal } from "./equal.mjs";
export function app_receipts_payment_emoji(purchase) {
  "$plain purchase";
  "The little picture for how a purchase was paid for: a bank note for cash, a card for credit.";
  arguments_assert(arguments, 1);
  let payment = app_receipts_payment_get(purchase);
  if (equal(payment, "cash")) {
    let r = "💵";
    return r;
  }
  let r2 = "💳";
  return r2;
}
