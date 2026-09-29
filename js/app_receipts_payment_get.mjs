import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
export function app_receipts_payment_get(purchase) {
  "$plain purchase";
  "How a purchase was paid for: 'credit' or 'cash'. A purchase kept before this could be chosen, or marked with a word this phone does not know, is credit, the way every purchase starts.";
  arguments_assert(arguments, 1);
  let payment = property_get_or(purchase, "payment", "credit");
  if (equal(payment, "cash")) {
    let r = "cash";
    return r;
  }
  let r2 = "credit";
  return r2;
}
