import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_receipts_purchase_photos_name_start(purchase) {
  "$plain purchase";
  "How a purchase's photos begin their names when saved to a phone: receipt and the day it was bought, as receipt 2026-11-20, so the saved files sort by day and say what they are; just receipt when no day was given.";
  arguments_assert(arguments, 1);
  let date = property_get_or(purchase, "date", "");
  if (equal(date, "")) {
    let r = "receipt";
    return r;
  }
  let joined = text_combine_multiple(["receipt ", date]);
  return joined;
}
