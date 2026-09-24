import { arguments_assert } from "./arguments_assert.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { date_local_iso } from "./date_local_iso.mjs";
import { date_local_hours_minutes } from "./date_local_hours_minutes.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
export async function app_receipts_purchase_new(folder_code) {
  "$plain folder_code";
  "Make an empty purchase in the folder the code names, dated with this phone's clock at this moment, and keep it.";
  "The date and time are this phone's own, as its clock shows them, because that is what a person reads off a receipt and what they will correct it to.";
  arguments_assert(arguments, 1);
  let now = new Date();
  let purchase = {
    key: uuid_browser(),
    folder_code,
    date: date_local_iso(now),
    time: date_local_hours_minutes(now),
    price: "",
    photos: [],
  };
  await app_receipts_purchase_save(purchase);
  return purchase;
}
